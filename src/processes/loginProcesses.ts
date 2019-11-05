import global from '@dojo/framework/shim/global';
import { createProcess } from '@dojo/framework/stores/process';
import { replace } from '@dojo/framework/stores/state/operations';
import { getHeaders, commandFactory } from './utils';
import { baseUrl } from '../config';
import { TitlePayload, EmailPayload, PasswordPayload, UsernamePayload, SetSessionPayload } from './interfaces';
const md5 = require('md5');

const loginUsernameInputCommand = commandFactory<UsernamePayload>(({ path, payload: { username } }) => {
	return [replace(path('login', 'username'), username)];
});

const loginPasswordInputCommand = commandFactory<PasswordPayload>(({ path, payload: { password } }) => {
	return [replace(path('login', 'password'), password)];
});

const registerEmailInputCommand = commandFactory<EmailPayload>(({ path, payload: { email } }) => {
	return [replace(path('register', 'email'), email)];
});

const registerPasswordInputCommand = commandFactory<PasswordPayload>(({ path, payload: { password } }) => {
	return [replace(path('register', 'password'), password)];
});

const registerUsernameInputCommand = commandFactory<UsernamePayload>(({ path, payload: { username } }) => {
	return [replace(path('register', 'username'), username)];
});

const clearLoginInputs = commandFactory(({ path }) => {
	return [replace(path('login', 'password'), ''), replace(path('login', 'username'), '')];
});

const clearRegisterInputs = commandFactory(({ path }) => {
	return [
		replace(path('register', 'password'), ''),
		replace(path('register', 'email'), ''),
		replace(path('register', 'username'), '')
	];
});

const startLoginCommand = commandFactory(({ path }) => {
	return [
		replace(path('login', 'loading'), true),
		replace(path('loading'), true),
		
	];
});

const startLoginPageLoadCommand = commandFactory<TitlePayload>(({ path, payload: { title } }) => {
	console.log('started');
	return [
		replace(path('header', 'title'), title),
		replace(path('loading'), true),
		replace(path('header','showMenu'), false)
	];
});
const endLoginPageLoadCommand = commandFactory(({ path }) => {
	console.log('ended');
	return [
		replace(path('loading'), false),
	];
});
const startRegisterCommand = commandFactory(({ path }) => {
	return [replace(path('register', 'loading'), true)];
});

const setSessionCommand = commandFactory<SetSessionPayload>(({ path, payload: { session } }) => {
	return [replace(path('user'), session)];
});

const loginCommand = commandFactory(async ({ get, path }) => {

	// replace(path('loading'), true)
	const requestPayload = `u=${get(path('login','username'))}&p=${md5(get(path('login','password')))}`;
	console.log(JSON.stringify(requestPayload));

	console.log(getHeaders());
	const response = await fetch(`${baseUrl}?x=login`, {
		method: 'POST',
		headers: getHeaders(),
		body: requestPayload,
	});
	
	const result = await response.json();
	if (result.status != 'success') {
		console.log("fail");
		return [
			replace(path('login', 'failed'), true),
			replace(path('login', 'loading'), false),
			replace(path('errors'), result.msg),
			replace(path('user'), {}),
			replace(path('loading'), false)
		];
	}
	let user = {
		username: get(path('login','username')),
		token: result.access_jwt
	};
	await global.sessionStorage.setItem('app-session', JSON.stringify(user));
	console.log(get(path('routing','outlet')));
	return [
		replace(path('routing', 'outlet'), 'dashboard'),
		replace(path('login', 'loading'), false),
		replace(path('errors'), undefined),
		replace(path('user'), user),
		replace(path('loading'), true),
	];
});

const registerCommand = commandFactory(async ({ get, path }) => {
	const requestPayload = {
		user: get(path('register'))
	};

	const response = await fetch(`${baseUrl}/users`, {
		method: 'post',
		body: JSON.stringify(requestPayload),
		headers: getHeaders()
	});
	const json = await response.json();
	if (!response.ok) {
		return [
			replace(path('register', 'failed'), true),
			replace(path('register', 'loading'), false),
			replace(path('errors'), json.errors),
			replace(path('user'), {})
		];
	}

	global.sessionStorage.setItem('conduit-session', JSON.stringify(json.user));

	return [
		replace(path('routing', 'outlet'), 'dashboard'),
		replace(path('register', 'loading'), false),
		replace(path('errors'), undefined),
		// replace(path('user'), json.user),
		replace(path('feed', 'items'), undefined),
		replace(path('feed', 'loaded'), false)
	];
});

const logoutCommand = commandFactory(({ path }) => {
	global.sessionStorage.removeItem('conduit-session');
	return [replace(path('user'), {}), replace(path('routing', 'outlet'), 'login')];
});



export const loginProcess = createProcess('login', [startLoginCommand, loginCommand, clearLoginInputs]);
export const startLoginPageLoadProcess = createProcess('start-login-page-load',[startLoginPageLoadCommand]);
export const endLoginPageLoadProcess = createProcess('end-login-page-load',[endLoginPageLoadCommand]);

export const registerProcess = createProcess('register', [startRegisterCommand, registerCommand, clearRegisterInputs]);
export const loginUsernameInputProcess = createProcess('login-username-input', [loginUsernameInputCommand]);
export const loginPasswordInputProcess = createProcess('login-password-input', [loginPasswordInputCommand]);
export const registerEmailInputProcess = createProcess('register-email-input', [registerEmailInputCommand]);
export const registerPasswordInputProcess = createProcess('register-password-input', [registerPasswordInputCommand]);
export const registerUsernameInputProcess = createProcess('register-username-input', [registerUsernameInputCommand]);
export const setSessionProcess = createProcess('set-session', [setSessionCommand]);
export const logoutProcess = createProcess('logout', [logoutCommand]);

