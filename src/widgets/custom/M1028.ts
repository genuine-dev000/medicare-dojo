import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
import Card from './Card';
import Checkbox from '@dojo/widgets/checkbox';
/**

 * @type M1028
 *
 * Properties that can be set on M1028
 */
// const SelectClasses = {
// 	"./custom/CustomTextField": {
// 		root: [css.root],
// 		input: [css.root]
// 	}
// };
// const HalfWidthClass = {
// 	"@dojo/widgets/checkbox": {
// 		root: [css.root]
// 	}
// };
 export interface M1028Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1028 extends ThemedMixin(WidgetBase)<M1028Properties> {
	private is_checked: boolean[] = [false];

	private _checkboxChange(idx: string) {
		let index = parseInt(idx) - 1;
		this.is_checked[index] = ! this.is_checked[index];
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M1028'}, [
            v('h5',{classes: [css.black, css.code]},['M1028']),
			v('p', {classes: [css.label]}, ['Active Diagnoses- Comorbidities and Co-existing Conditions – Check all that apply']),
			v('div', [
				w(Checkbox, {
					checked: this.is_checked[0],
					label: '1 - Peripheral Vascular Disease (PVD) or Peripheral Arterial Disease (PAD)',
					value: '1',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[1],
					label: '2 - Diabetes Mellitus (DM)',
					value: '2',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[2],
					label: '3 - None of the above',
					value: '3',
					onChange: this._checkboxChange
				})
			])
        ]);
	}
}

export default M1028;
