import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';

// import EnhancedTextInput from '@dojo/widgets/enhanced-text-input';

import M2102 from './custom/M2102';


import * as css from './styles/SOCPHAD.m.css';
// import TextInput from '@dojo/widgets/text-input';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
export default class Home extends WidgetBase {

	// private _today = new Date();
	// private _minDate = new Date(2017, 3, 16);
	// private _maxDate = new Date(this._today.getFullYear(), this._today.getMonth() + 1, 15);
	protected render() {
		return v('div',{classes: [css.root]},[
                  w(M2102,{key: 'm2102'},[])
		]);
	}
}
