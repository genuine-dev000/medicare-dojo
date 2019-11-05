import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/M1000.m.css';
import Card from './Card';
import Checkbox from '@dojo/widgets/checkbox';
import CustomTextField from './CustomTextField';
/**

 * @type M1000
 *
 * Properties that can be set on M1000
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
 export interface M1000Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1000 extends ThemedMixin(WidgetBase)<M1000Properties> {
	private is_checked: boolean[] = [false];

	private _checkboxChange(idx: string) {
		let index = parseInt(idx) - 1;
		this.is_checked[index] = ! this.is_checked[index];
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M1000'}, [
            v('h5',{classes: [css.black, css.code]},['M1000']),
			v('p', {classes: [css.label]}, ['From which of the following Inpatient Facilities was the patient discharged during the past 14 days? (Mark all that apply.)']),
			v('div', [
				w(Checkbox, {
					checked: this.is_checked[0],
					label: '1 - Long-term nursing facility (NF)',
					value: '1',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[1],
					label: '2 - Skilled nursing facility (SNF / TCU)',
					value: '2',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[2],
					label: ' 3 - Short-stay acute hospital (IPPS) ',
					value: '3',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[3],
					label: '4 - Long-term care hospital (LTCH)',
					value: '4',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[4],
					label: '5 - Inpatient rehabilitation hospital or unit (IRF)',
					value: '5',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[5],
					label: '6 - Psychiatric hospital or unit',
					value: '6',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					classes: HalfWidthClass,
					checked: this.is_checked[6],
					label: '7 - Other (specify)',
					value: '7',
					onChange: this._checkboxChange
				}),
				w(CustomTextField, { 
					key: 'addition',
					label: '',
					value: '',
					widthHalf: true
				}),
				w(Checkbox, {
					checked: this.is_checked[6],
					label: 'NA - Patient was not discharged from an inpatient facility [ Go to M1021 ]',
					value: '8',
					onChange: this._checkboxChange
				}),
			])
        ]);
	}
}

export default M1000;
