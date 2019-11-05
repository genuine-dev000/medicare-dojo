import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import M2001 from './custom/M2001';
import M2003 from './custom/M2003';
import M2010 from './custom/M2010';
import M2020 from './custom/M2020';
import M2030 from './custom/M2030';

import * as css from './styles/SOCPHAD.m.css';
export default class Home extends WidgetBase {
	protected render() {
		return v('div',{classes: [css.root]},[
				  w(M2001,{key: 'm2001'},[]),
				  w(M2003,{key: 'm2003'},[]),
				  w(M2010,{key: 'm2010'},[]),
				  w(M2020,{key: 'm2020'},[]),
				  w(M2030,{key: 'm2030'},[]),

		]);
	}
}
