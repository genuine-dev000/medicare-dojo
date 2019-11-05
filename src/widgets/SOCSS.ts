import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';

import M1200 from './custom/M1200';
import M1242 from './custom/M1242';


import * as css from './styles/SOCPHAD.m.css';

export default class Home extends WidgetBase {

	protected render() {
		return v('div',{classes: [css.root]},[
				  w(M1200,{key: 'm1200'},[]),
				  w(M1242,{key: 'm1242'},[])
		]);
	}
}
