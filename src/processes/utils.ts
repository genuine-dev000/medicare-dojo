import { createCommandFactory } from '@dojo/framework/stores/process';
import { State } from '../interfaces';

export function getHeaders(token?: string): any {
	const headers: { [key: string]: string } = {
		'Accept': 'application/json, text/plain, */*',
		'Content-Type': 'application/x-www-form-urlencoded',
	};
	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}
	return headers;
}

export const commandFactory = createCommandFactory<State>();
