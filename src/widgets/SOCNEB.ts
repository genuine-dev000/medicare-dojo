import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';

// import EnhancedTextInput from '@dojo/widgets/enhanced-text-input';

import M1700 from './custom/M1700';
import M1710 from './custom/M1710';
import M1720 from './custom/M1720';
import M1730 from './custom/M1730';
import M1740 from './custom/M1740';
import M1745 from './custom/M1745';

import * as css from './styles/SOCPHAD.m.css';
// import TextInput from '@dojo/widgets/text-input';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
export default class Home extends WidgetBase {

	// private _today = new Date();
	// private _minDate = new Date(2017, 3, 16);
	// private _maxDate = new Date(this._today.getFullYear(), this._today.getMonth() + 1, 15);
	protected render() {
		return v('div',{classes: [css.root]},[
				  w(M1700,{key: 'm1700'},[]),
				  w(M1710,{key: 'm1710'},[]),
				  w(M1720,{key: 'm1720'},[]),
				  w(M1730,{key: 'm1730'},[]),
				  w(M1740,{key: 'm1740'},[]),
				  w(M1745,{key: 'm1745'},[]),
		]);
	}
}
