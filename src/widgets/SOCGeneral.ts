import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';

// import EnhancedTextInput from '@dojo/widgets/enhanced-text-input';

import M0010 from './custom/M0010';
import M0014 from './custom/M0014';
import M0016 from './custom/M0016';
import M0018 from './custom/M0018';
import M0020 from './custom/M0020';
import M0030 from './custom/M0030';
import M0040 from './custom/M0040';
import M0050 from './custom/M0050';
import M0060 from './custom/M0060';
import M0063 from './custom/M0063';
import M0064 from './custom/M0064';
import M0065 from './custom/M0065';
import M0066 from './custom/M0066';
import M0069 from './custom/M0069';
import M0140 from './custom/M0140';
import M0150 from './custom/M0150';
import * as css from './styles/SOCGeneral.m.css';
// import TextInput from '@dojo/widgets/text-input';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
export default class Home extends WidgetBase {

	// private _today = new Date();
	// private _minDate = new Date(2017, 3, 16);
	// private _maxDate = new Date(this._today.getFullYear(), this._today.getMonth() + 1, 15);
	protected render() {
		return v('div',{classes: [css.root]},[
			w(M0010,{key: 'm0010'}),
			w(M0014,{key: 'm0014'}),
			w(M0016,{key: 'm0016'}),
			w(M0018,{key: 'm0018'}),
			w(M0020,{key: 'm0020'}),
			w(M0030,{key: 'm0030'}),
			w(M0040,{key: 'm0040'}),
			w(M0050,{key: 'm0050'}),
			w(M0060,{key: 'm0060'}),
			w(M0063,{key: 'm0063'}),
			w(M0064,{key: 'm0064'}),
			w(M0065,{key: 'm0065'}),
			w(M0066,{key: 'm0066'}),
			w(M0069,{key: 'm0069'}),
			w(M0140,{key: 'm0140'}),
			w(M0150,{key: 'm0150'}),
		]);
	}
}
