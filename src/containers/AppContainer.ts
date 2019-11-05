import { Store } from '@dojo/framework/stores/Store';
import { App, AppProperties } from '../App';
import { onAppMenuToggleProcess } from '../processes/headerProcesses';
import { State } from '../interfaces';
import { StoreContainer } from '@dojo/framework/stores/StoreInjector';

function getProperties(store: Store<State>): AppProperties {
	const { get, path } = store;
	return {
		loading: get(path('loading')),
		headerTitle: get(path('headerTitle')),
		showMenu: get(path('showMenu')),
		menuOpen: get(path('menuOpen')),
		onAppMenuToggle: onAppMenuToggleProcess(store),
	};
}

export default StoreContainer(App, 'state', { paths: [['loading'], ['headerTitle'],['showMenu'], ['menuOpen']], getProperties });
