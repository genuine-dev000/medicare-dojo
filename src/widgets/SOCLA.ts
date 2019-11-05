import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';

// import EnhancedTextInput from '@dojo/widgets/enhanced-text-input';

import M1100 from './custom/M1100';


import * as css from './styles/SOCPHAD.m.css';
// import TextInput from '@dojo/widgets/text-input';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
export default class Home extends WidgetBase {

	protected render() {
		return v('div',{classes: [css.root]},[
                  w(M1100,{key: 'm1100'},[])
		]);
	}
}
