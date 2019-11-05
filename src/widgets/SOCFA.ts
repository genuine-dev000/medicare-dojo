import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import GG0100 from './custom/GG0100';
import GG0110 from './custom/GG0110';
import GG0130 from './custom/GG0130';
import GG0170 from './custom/GG0170';

import * as css from './styles/SOCPHAD.m.css';
export default class Home extends WidgetBase {

	protected render() {
		return v('div',{classes: [css.root]},[
				  w(GG0100,{key: 'GG0100'},[]),
				  w(GG0110,{key: 'GG0110'},[]),
				  w(GG0130,{key: 'GG0130'},[]),
				  w(GG0170,{key: 'GG0170'},[])
		]);
	}
}
