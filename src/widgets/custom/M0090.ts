import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
import Card from './Card';
import DatePicker from './DatePicker';
/**

 * @type M0090
 *
 * Properties that can be set on M0090
 */
 export interface M0090Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M0090 extends ThemedMixin(WidgetBase)<M0090Properties> {
	protected render(): DNode | DNode[] {

		return w(Card,{key: 'card-M0090'}, [
            v('h5',{classes: [css.black, css.code]},['M0090']),
            v('p', {classes: [css.label]}, ['Date Assessment Completed']),
			w(DatePicker,{selectedDate: new Date()})

        ]);
	}
}
export default M0090;
