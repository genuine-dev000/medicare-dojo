import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';

// import EnhancedTextInput from '@dojo/widgets/enhanced-text-input';

import M0080 from './custom/M0080';
import M0090 from './custom/M0090';
import M0100 from './custom/M0100';
import M0102 from './custom/M0102';
import M0104 from './custom/M0104';
import M0110 from './custom/M0110';
import * as css from './styles/SOCCRI.m.css';
// import TextInput from '@dojo/widgets/text-input';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
export default class Home extends WidgetBase {

	// private _today = new Date();
	// private _minDate = new Date(2017, 3, 16);
	// private _maxDate = new Date(this._today.getFullYear(), this._today.getMonth() + 1, 15);
	protected render() {
		return v('div',{classes: [css.root]},[
			w(M0080,{key: 'm0080'}),
			w(M0090,{key: 'm0090'}),
			w(M0100,{key: 'm0100'}),
			w(M0102,{key: 'm0102'}),
			w(M0104,{key: 'm0104'}),
			w(M0110,{key: 'm0110'}),
		]);
	}
}
