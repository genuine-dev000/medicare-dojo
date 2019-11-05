import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
import Card from './Card';
import DatePicker from './DatePicker';
import Checkbox from '@dojo/widgets/checkbox';
/**

 * @type M1005
 *
 * Properties that can be set on M1005
 */
 export interface M1005Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1005 extends ThemedMixin(WidgetBase)<M1005Properties> {
	private _checkboxChecked = false;
	private _checkboxChange() {
		this._checkboxChecked = !this._checkboxChecked;
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M1005'}, [
            v('h5',{classes: [css.black, css.code]},['M1005']),
			v('p', {classes: [css.label]}, ['Inpatient Discharge Date (most recent)']),
			w(DatePicker,{selectedDate: new Date()}),
			w(Checkbox,{
				checked: this._checkboxChecked,
				label: 'UK - Unknown',
				value: '',
				onChange: this._checkboxChange
			}),

        ]);
	}
}
export default M1005;
