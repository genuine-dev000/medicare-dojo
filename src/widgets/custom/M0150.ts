import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/M0150.m.css';
import Card from './Card';
import Checkbox from '@dojo/widgets/checkbox';
import CustomTextField from './CustomTextField';
/**

 * @type M0150
 *
 * Properties that can be set on M0150
 */
// const SelectClasses = {
// 	"./custom/CustomTextField": {
// 		root: [css.root],
// 		input: [css.root]
// 	}
// };
const HalfWidthClass = {
	"@dojo/widgets/checkbox": {
		root: [css.root]
	}
};
 export interface M0150Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M0150 extends ThemedMixin(WidgetBase)<M0150Properties> {
	private is_checked: boolean[] = [false];

	private _checkboxChange(idx: string) {
		let index = parseInt(idx);
		this.is_checked[index] = ! this.is_checked[index];
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M0150'}, [
            v('h5',{classes: [css.black, css.code]},['M0150']),
			v('p', {classes: [css.label, css.margin_bottom_small]}, ['Current Payment Sources for Home Care']),
			v('p', {classes: [css.label, css.margin_top_small]}, ['( Mark all that apply )']),
			v('div', [
				w(Checkbox, {
					checked: this.is_checked[0],
					label: '0 - None; no charge for current services',
					value: '0',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[1],
					label: '1 - Medicare (traditional fee-for-service) ',
					value: '1',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[2],
					label: '2 - Medicare (HMO/managed care/Advantage plan) ',
					value: '2',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[3],
					label: ' 3 - Medicaid (traditional fee-for-service)  ',
					value: '3',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[4],
					label: ' 4 - Medicaid (HMO/managed care) ',
					value: '4',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[5],
					label: '5 - Workers\' compensation',
					value: '5',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[6],
					label: '6 - Title programs (e.g., Title III, V, or XX)',
					value: '6',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[7],
					label: '7 - Other government (e.g., TriCare, VA, etc.)',
					value: '7',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[8],
					label: '8 - Private insurance',
					value: '8',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[9],
					label: '9 - Private HMO/managed care',
					value: '9',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[10],
					label: ' 10 - Self-pay',
					value: '10',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					classes: HalfWidthClass,
					checked: this.is_checked[11],
					label: '11 - Other (specify)',
					value: '11',
					onChange: this._checkboxChange
				}),
				w(CustomTextField, { 
					key: 'addition',
					label: '',
					value: '',
					widthHalf: true
				}),
				w(Checkbox, {
					
					checked: this.is_checked[12],
					label: 'UK - Unknown',
					value: '12',
					onChange: this._checkboxChange
				})
			])
        ]);
	}
}

export default M0150;
