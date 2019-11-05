import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
import Card from './Card';
import DatePicker from './DatePicker';
import Checkbox from '@dojo/widgets/checkbox';
/**

 * @type M0102
 *
 * Properties that can be set on M0102
 */
 export interface M0102Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M0102 extends ThemedMixin(WidgetBase)<M0102Properties> {
	private _checkboxChecked = false;
	private _checkboxChange() {
		this._checkboxChecked = !this._checkboxChecked;
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M0102'}, [
            v('h5',{classes: [css.black, css.code]},['M0102']),
			v('p', {classes: [css.label, css.margin_bottom_small]}, ['Date of Physician-ordered Start of Care']),
			v('p', {classes: [css.label, css.margin_top_small]}, ['(Resumption of Care)']),
			v('p', {classes: [css.label]}, ['If the physician indicated a specific start of care (resumption of care) date when the patient was reffered for home health services, record the date specified.']),
			w(DatePicker,{selectedDate: new Date()}),
			v('h5',{classes: [css.black, css.code]},['[Go to M0110, if date entered]']),
			w(Checkbox,{
				checked: this._checkboxChecked,
				label: 'NA –No specific SOC date ordered by physician',
				value: '',
				onChange: this._checkboxChange
			}),

        ]);
	}
}
export default M0102;
