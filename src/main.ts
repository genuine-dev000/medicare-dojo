
import has, { add, exists } from "@dojo/framework/has/has";
import global from '@dojo/framework/shim/global';

import renderer from '@dojo/framework/widget-core/vdom';
import { w } from '@dojo/framework/widget-core/d';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';
import { registerThemeInjector } from '@dojo/framework/widget-core/mixins/Themed';
import dojo from '@dojo/themes/dojo';
import '@dojo/themes/dojo/index.css';

import routes from './routes';
import AppContainer from './containers/AppContainer';

import { Store } from '@dojo/framework/stores/Store';
import { registerStoreInjector } from '@dojo/framework/stores/StoreInjector';
import { setSessionProcess } from './processes/loginProcesses';
import { State } from './interfaces';
import { changeRouteProcess } from './processes/routeProcesses';

const store = new Store<State>();
let session: string = '';

if (!exists("build-time-render")) {
	add("build-time-render", false);
}

if (!has('build-time-render')) {
	session = global.sessionStorage.getItem('app-session');
}
if (session) {
	setSessionProcess(store)({ session: JSON.parse(session) });
}

const registry = registerStoreInjector(store);
const router = registerRouterInjector(routes, registry);
registerThemeInjector(dojo, registry);

router.on('nav', ({ outlet, context }: any) => {
	changeRouteProcess(store)({ outlet, context });
});

function onRouteChange() {
	const outlet = store.get(store.path('routing', 'outlet'));
	const params = store.get(store.path('routing', 'params'));
	if (outlet) {
		const link = router.link(outlet, params);
		if (link !== undefined) {
			router.setPath(link);
		}
	}
}

store.onChange(store.path('routing', 'outlet'), onRouteChange);
store.onChange(store.path('routing', 'params'), onRouteChange);

router.on('outlet', ({outlet, action}) => {
	console.log(outlet);
	if( action === 'enter'){
		console.log(outlet.id);
		const { get, path } = store;
		// redirect to login page if a user tries to see page without login

		let token  = get(path('user','token'));
		if( !token ){
			const link = router.link('login');
			if(link !== undefined){
				router.setPath(link);
			}
		}
		switch (outlet.id){
			case 'dashboard':
				 break;
		}
		//changeRouteProcess(store)({outlet: outlet.id, context: outlet});

	}
});
const r = renderer(() => w(AppContainer, {}));
r.mount({ registry });
