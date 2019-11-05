import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import { WidgetProperties } from '@dojo/framework/widget-core/interfaces';
import Outlet from '@dojo/framework/routing/Outlet';
import SlidePane from '@dojo/widgets/slide-pane';
// import { I18nMixin } from '@dojo/framework/widget-core/mixins/I18n';

// import Header from './widgets/Header'
import headerContainer from './containers/headerContainer';
import Menu from './widgets/Menu';
import SOCGeneral from './widgets/SOCGeneral';
import SOCCRI from './widgets/SOCCRI';
import SOCPHAD from './widgets/SOCPHAD';
import SOCLA from './widgets/SOCLA';
import SOCSS from './widgets/SOCSS';
import SOCIS from './widgets/SOCIS';
import SOCRS from './widgets/SOCRS';
import SOCES from './widgets/SOCES';
import SOCNEB from './widgets/SOCNEB';
import SOCADL from './widgets/SOCADL';
import SOCMedication from './widgets/SOCMedication';
import SOCCM from './widgets/SOCCM';
import SOCTherapy from './widgets/SOCTherapy';
import SOCFA from './widgets/SOCFA';

import * as css from './App.m.css';
import LoginContainer from './containers/LoginContainer';
import DashboardContainer from './containers/DashboardContainer';
import patientContainer from './containers/PatientContainer';
import Loading from './widgets/custom/Loading';
import { MenuTogglePayload } from './processes/interfaces';
import { MatchDetails } from '@dojo/framework/routing/interfaces';
export interface AppProperties extends WidgetProperties {
	loading: boolean,
	headerTitle: string,
	showMenu: boolean,
	menuOpen: boolean,
	onAppMenuToggle: (show: MenuTogglePayload) => void,
}
export class App extends WidgetBase<AppProperties>{
	private _onAppMenuToggle(){
		const { menuOpen = false} = this.properties;
		console.log( menuOpen );
		this.properties.onAppMenuToggle({ show: false });
	}
	protected render() {

		const { menuOpen = false, loading = false, } = this.properties;
		
		return v('maya', { }, [
			w(headerContainer, {}),
			w(SlidePane, {
				underlay: true,
				open: menuOpen,
				// onOpen: this._onAppMenuToggle,
				onRequestClose: this._onAppMenuToggle,
				classes: { 
					"@dojo/widgets/slide-pane": {
						underlay: [css.slidePaneUnderlay],
						content: [css.slidePaneContent],
						pane: [css.slidePane]
					}
				}
			}, [
				w(Menu, {
					onRequestRouteToDashboard: this._onAppMenuToggle,
					onRequestLogout: this._onAppMenuToggle
				})
			]),
			v('div',{classes: [css.shadow]}, []),
			v('main', {classes: [css.root]}, [
				w(Outlet, { key: 'login', id: 'login', renderer: () => w(LoginContainer, {}) }),
				w(Outlet, { key: 'dashboard', id: 'dashboard', renderer: () => w(DashboardContainer, {}) }),
				w(Outlet, {
					key: 'visit',
					id: 'visit',
					renderer: (details: MatchDetails) => {
						return w(patientContainer, { slug: details.params.slug });
					}
				}),
				w(Outlet, { key: 'soc_general', id: 'soc_general', renderer: () => w(SOCGeneral, {}) }),
				w(Outlet, { key: 'soc_cri', id: 'soc_cri', renderer: () => w(SOCCRI, {}) }),
				w(Outlet, { key: 'soc_phad', id: 'soc_phad', renderer: () => w(SOCPHAD, {}) }),
				w(Outlet, { key: 'soc_la', id: 'soc_la', renderer: () => w(SOCLA, {}) }),
				w(Outlet, { key: 'soc_ss', id: 'soc_ss', renderer: () => w(SOCSS, {}) }),
				w(Outlet, { key: 'soc_is', id: 'soc_is', renderer: () => w(SOCIS, {}) }),
				w(Outlet, { key: 'soc_rs', id: 'soc_rs', renderer: () => w(SOCRS, {}) }),
				w(Outlet, { key: 'soc_es', id: 'soc_es', renderer: () => w(SOCES, {}) }),
				w(Outlet, { key: 'soc_neb', id: 'soc_neb', renderer: () => w(SOCNEB, {}) }),
				w(Outlet, { key: 'soc_adl', id: 'soc_adl', renderer: () => w(SOCADL, {}) }),
				w(Outlet, { key: 'soc_medication', id: 'soc_medication', renderer: () => w(SOCMedication, {}) }),
				w(Outlet, { key: 'soc_cm', id: 'soc_cm', renderer: () => w(SOCCM, {}) }),
				w(Outlet, { key: 'soc_therapy', id: 'soc_therapy', renderer: () => w(SOCTherapy, {}) }),
				w(Outlet, { key: 'soc_fa', id: 'soc_fa', renderer: () => w(SOCFA, {}) }),
				
			]),
			loading ? w(Loading, { showSpinner: true }) : null
		]);
	}
}

export default App;