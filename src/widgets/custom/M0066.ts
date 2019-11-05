import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
import Card from './Card';
import DatePicker from './DatePicker';
/**

 * @type M0066
 *
 * Properties that can be set on M0066
 */
// const SelectClasses = {
// 	"@dojo/widgets/enhanced-text-input": {
// 		input: [css.input]
// 	}
//   };
 export interface M0066Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M0066 extends ThemedMixin(WidgetBase)<M0066Properties> {
	protected render(): DNode | DNode[] {

		return w(Card,{key: 'card-M0066'}, [
            v('h5',{classes: [css.black, css.code]},['M0066']),
            v('p', {classes: [css.label]}, ['Birth Date']),
			w(DatePicker,{selectedDate: new Date()})

        ]);
	}
}

export default M0066;
