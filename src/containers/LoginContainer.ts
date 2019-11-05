import { Store } from '@dojo/framework/stores/Store';
import Login, { LoginProperties } from './../widgets/Login';
import { endLoginPageLoadProcess, startLoginPageLoadProcess, loginProcess, loginUsernameInputProcess, loginPasswordInputProcess } from '../processes/loginProcesses';
import { State } from '../interfaces';
import { StoreContainer } from '@dojo/framework/stores/StoreInjector';

function getProperties(store: Store<State>): LoginProperties {
	const { get, path } = store;
	return {
        // key: '1',
		username: get(path('login', 'username')),
		password: get(path('login', 'password')),
        inProgress: get(path('login', 'loading')),
        loginFailed: false,
        errors: get(path('errors')),
		onUsernameInput: loginUsernameInputProcess(store),
		onPasswordInput: loginPasswordInputProcess(store),
		onLogin: loginProcess(store),
		startLoginPageLoad: startLoginPageLoadProcess(store),
		endLoginPageLoad: endLoginPageLoadProcess(store)
	};
}

export default StoreContainer(Login, 'state', { paths: [['login'], ['errors']], getProperties });
