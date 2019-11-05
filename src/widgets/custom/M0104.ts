import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
import Card from './Card';
import DatePicker from './DatePicker';
/**

 * @type M0104
 *
 * Properties that can be set on M0104
 */
 export interface M0104Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M0104 extends ThemedMixin(WidgetBase)<M0104Properties> {
	protected render(): DNode | DNode[] {

		return w(Card,{key: 'card-M0104'}, [
            v('h5',{classes: [css.black, css.code]},['M0104']),
			v('p', {classes: [css.label]}, ['Date of Referral']),
			v('p', {classes: [css.label]}, ['Indicate the date that the written or verbal referral for initiation or resumption of care was received by the HHA.']),
			w(DatePicker,{selectedDate: new Date()})

        ]);
	}
}
export default M0104;
