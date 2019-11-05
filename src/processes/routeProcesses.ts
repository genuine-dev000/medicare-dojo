import { createProcess } from '@dojo/framework/stores/process';
import { replace } from '@dojo/framework/stores/state/operations';
import { commandFactory } from './utils';
import { ChangeRoutePayload } from './interfaces';

const changeRouteCommand = commandFactory<ChangeRoutePayload>(({ path, payload: { outlet, context } }) => {
	console.log(outlet);
	console.log(context.params);
	return [
		replace(path('routing', 'outlet'), outlet),
		replace(path('routing', 'params'), context.params),
		replace(path('loading'), false),
		replace(path('errors'), undefined)
	];
});


export const changeRouteProcess = createProcess('change-route', [changeRouteCommand]);
