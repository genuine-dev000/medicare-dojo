import { Store } from '@dojo/framework/stores/Store';
import Header, { HeaderProperties } from '../widgets/Header';
import { onAppMenuToggleProcess } from '../processes/headerProcesses';
import { State } from '../interfaces';
import { StoreContainer } from '@dojo/framework/stores/StoreInjector';

function getProperties(store: Store<State>): HeaderProperties {
	const { get, path } = store;
	return {
                title: get(path('header', 'title')),
                showMenu: get(path('header','showMenu')),
                closeMenu: get(path('header','closeMenu')),
                links: get(path('header','links')),
                onMenuClick: onAppMenuToggleProcess(store)
	};
}

export default StoreContainer(Header, 'state', { paths: [['header']], getProperties });
