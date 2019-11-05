import { createProcess } from '@dojo/framework/stores/process';
import { replace } from '@dojo/framework/stores/state/operations';
import { commandFactory } from './utils';
import { MenuTogglePayload } from './interfaces';

const onAppMenuToggleCommand = commandFactory<MenuTogglePayload>(({ path, payload: {show} }) => {
	if(show){
		return [
			replace(path('menuOpen'), show),
			replace(path('header', 'showMenu'), false),
			replace(path('header', 'closeMenu'), true),
		];
	}else{
		return [
			replace(path('menuOpen'), show),
			replace(path('header', 'showMenu'), true),
			replace(path('header', 'closeMenu'), false),
		];
	}

});
export const onAppMenuToggleProcess = createProcess('app-menu-toggle', [onAppMenuToggleCommand]);


