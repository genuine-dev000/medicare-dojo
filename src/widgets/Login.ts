import { DNode } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme, ThemedProperties } from '@dojo/framework/widget-core/mixins/Themed';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { w, v } from '@dojo/framework/widget-core/d';
import * as css from './styles/login.m.css';
import CustomTextField from './custom/CustomTextField';
import Card from './custom/Card';
import Button from './custom/Button';
import { Errors, WithTarget } from '../interfaces';
import { TitlePayload, PasswordPayload, UsernamePayload } from '../processes/interfaces';

/**
 * @type LoginProperties
 *
 * Properties that can be set on Login components
 */
export interface LoginProperties extends ThemedProperties{ 
	username: string;
	password: string;
	inProgress?: boolean;
	enterAnimation?: string;
	loginFailed: boolean;
	errors: Errors;
	onLogin: (opts: object) => void;
	startLoginPageLoad: (opts: TitlePayload) => void;
	endLoginPageLoad: (opts: object) => void;
	onUsernameInput: (value: UsernamePayload) => void;
	onPasswordInput: (value: PasswordPayload) => void;
}
export const messages = {
	usernameLabel: 'Email or Username',
	passwordLabel: 'Password',
	loginButtonLabel: 'Login',
	loginFailed: 'Login Failed'
};
@theme(css)
export default class Login extends ThemedMixin(WidgetBase)<LoginProperties> {

	private _usernameInvalid = false;

	private _passwordInvalid = false;

	private _onUsernameInput({ target: { value: username } }: WithTarget) {
		this.properties.onUsernameInput({ username });
	}

	private _onPasswordInput({ target: { value: password } }: WithTarget) {
		this.properties.onPasswordInput({ password });
	}
	private _onLogin(event: Event) {
		event.preventDefault();
		this._usernameInvalid = Boolean(!this.properties.username);
		this._passwordInvalid = Boolean(!this.properties.password);

		if (!this._usernameInvalid && !this._passwordInvalid) {
			this.properties.onLogin({});
		}
		else {
			this.invalidate();
		}
	}
	protected onAttach(): void{
		console.log('login page attached');
		this.properties.startLoginPageLoad({title: 'MHC Login'});
		this.properties.endLoginPageLoad({});
	}
	protected render(): DNode | DNode[] {
		console.log('login page rendering');
		
		return w(Card, { 
			key: this.properties.key }, [
			this.properties.loginFailed ? v('span', [ messages.loginFailed ]) : null,
			w(CustomTextField, { 
				key: '1',
				invalid: this._usernameInvalid,
				label: messages.usernameLabel,
				value: this.properties.username,
				onInput: this._onUsernameInput
			}),
			w(CustomTextField, {
				key: '2',
				invalid: this._passwordInvalid,
				label: messages.passwordLabel,
				type: 'password',
				value: this.properties.password,
				onInput: this._onPasswordInput
			}),
			w(Button, {
				onClick: this._onLogin,
				label: messages.loginButtonLabel,
				colored: true,
				raised: true
			}),
			
		]);
	}
}

// export default Login;
