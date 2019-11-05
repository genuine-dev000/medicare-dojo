import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/M0150.m.css';
import Card from './Card';
import Checkbox from '@dojo/widgets/checkbox';
/**

 * @type GG0110
 *
 * Properties that can be set on GG0110
 */
// const SelectClasses = {
// 	"./custom/CustomTextField": {
// 		root: [css.root],
// 		input: [css.root]
// 	}
// };

 export interface GG0110Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class GG0110 extends ThemedMixin(WidgetBase)<GG0110Properties> {
	private is_checked: boolean[] = [false];

	private _checkboxChange(idx: string) {
		let index = parseInt(idx);
		this.is_checked[index] = ! this.is_checked[index];
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-GG0110'}, [
            v('h5',{classes: [css.black, css.code]},['GG0110']),
			v('p', {classes: [css.label, css.margin_bottom_small]}, ['Prior Device Use. Indicate devices an aids used by the patient prior to the current illness, exacerbation, or injury']),
			v('p', {classes: [css.label, css.margin_top_small]}, ['Check all the apply']),
			v('div', [
				w(Checkbox, {
					checked: this.is_checked[0],
					label: 'A. Manual wheelchair',
					value: '0',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[1],
					label: 'B. Motorized wheelchair and/or scooter',
					value: '1',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[2],
					label: 'C. Mechanical lift',
					value: '2',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[3],
					label: 'D. Walker',
					value: '3',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[4],
					label: 'E. Orthotics/Prosthetics',
					value: '4',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[5],
					label: 'Z. None of the above',
					value: '5',
					onChange: this._checkboxChange
				}),
			])
        ]);
	}
}

export default GG0110;
