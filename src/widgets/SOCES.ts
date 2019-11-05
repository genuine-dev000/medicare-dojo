import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';

// import EnhancedTextInput from '@dojo/widgets/enhanced-text-input';

import M1600 from './custom/M1600';
import M1610 from './custom/M1610';
import M1620 from './custom/M1620';
import M1630 from './custom/M1630';

import * as css from './styles/SOCPHAD.m.css';
// import TextInput from '@dojo/widgets/text-input';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
export default class Home extends WidgetBase {

	// private _today = new Date();
	// private _minDate = new Date(2017, 3, 16);
	// private _maxDate = new Date(this._today.getFullYear(), this._today.getMonth() + 1, 15);
	protected render() {
		return v('div',{classes: [css.root]},[
				  w(M1600,{key: 'm1600'},[]),
				  w(M1610,{key: 'm1610'},[]),
				  w(M1620,{key: 'm1620'},[]),
				  w(M1630,{key: 'm1630'},[])
		]);
	}
}
