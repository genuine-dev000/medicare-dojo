import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';

// import EnhancedTextInput from '@dojo/widgets/enhanced-text-input';

import M1800 from './custom/M1800';
import M1810 from './custom/M1810';
import M1820 from './custom/M1820';
import M1830 from './custom/M1830';
import M1840 from './custom/M1840';
import M1845 from './custom/M1845';
import M1850 from './custom/M1850';
import M1860 from './custom/M1860';
import M1870 from './custom/M1870';
import M1910 from './custom/M1910';

import * as css from './styles/SOCPHAD.m.css';
// import TextInput from '@dojo/widgets/text-input';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
export default class Home extends WidgetBase {

	// private _today = new Date();
	// private _minDate = new Date(2017, 3, 16);
	// private _maxDate = new Date(this._today.getFullYear(), this._today.getMonth() + 1, 15);
	protected render() {
		return v('div',{classes: [css.root]},[
				  w(M1800,{key: 'm1800'},[]),
				  w(M1810,{key: 'm1810'},[]),
				  w(M1820,{key: 'm1820'},[]),
				  w(M1830,{key: 'm1830'},[]),
				  w(M1840,{key: 'm1840'},[]),
				  w(M1845,{key: 'm1845'},[]),
				  w(M1850,{key: 'm1850'},[]),
				  w(M1860,{key: 'm1860'},[]),
				  w(M1870,{key: 'm1870'},[]),
				  w(M1910,{key: 'm1910'},[]),

		]);
	}
}
