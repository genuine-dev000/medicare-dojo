import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';

// import EnhancedTextInput from '@dojo/widgets/enhanced-text-input';

import M1000 from './custom/M1000';
import M1005 from './custom/M1005';
import M1021_1023 from './custom/M1021_1023';
import M1028 from './custom/M1028';
import M1030 from './custom/M1030';
import M1033 from './custom/M1033';
import M1060 from './custom/M1060';

import * as css from './styles/SOCPHAD.m.css';
// import TextInput from '@dojo/widgets/text-input';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
export default class Home extends WidgetBase {

	// private _today = new Date();
	// private _minDate = new Date(2017, 3, 16);
	// private _maxDate = new Date(this._today.getFullYear(), this._today.getMonth() + 1, 15);
	protected render() {
		return v('div',{classes: [css.root]},[
            w(M1000,{key: 'M1000'}),
            w(M1005,{key: 'M1005'}),
            w(M1021_1023,{key: 'M1021_1023'}),
            w(M1028,{key: 'M1028'}),
            w(M1030,{key: 'M1030'}),
            w(M1033,{key: 'M1033'}),
            w(M1060,{key: 'M1060'}),

		]);
	}
}
