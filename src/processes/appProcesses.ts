import { createProcess } from '@dojo/framework/stores/process';
import { replace } from '@dojo/framework/stores/state/operations';
import { commandFactory } from './utils';
import { MenuTogglePayload } from '../processes/interfaces';


const onAppMenuToggleCommand = commandFactory<MenuTogglePayload>(({ path, payload: {show} }) => {
	return [
		replace(path('menuOpen'), show),
	];
});
export const onAppMenuToggleProcess = createProcess('app-menu-toggle', [onAppMenuToggleCommand]);


