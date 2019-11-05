import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
import Card from './Card';
import Checkbox from '@dojo/widgets/checkbox';
/**

 * @type M1030
 *
 * Properties that can be set on M1030
 */
 export interface M1030Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1030 extends ThemedMixin(WidgetBase)<M1030Properties> {
	private is_checked: boolean[] = [false];

	private _checkboxChange(idx: string) {
		let index = parseInt(idx) - 1;
		this.is_checked[index] = ! this.is_checked[index];
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M1030'}, [
            v('h5',{classes: [css.black, css.code]},['M1030']),
			v('p', {classes: [css.label]}, ['Therapies the patient receives at home(Mark all that apply.)']),
			v('div', [
				w(Checkbox, {
					checked: this.is_checked[0],
					label: '1 - Intravenous or infusion therapy (excludes TPN)',
					value: '1',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[1],
					label: '2 - Parenteral nutrition (TPN or lipids)',
					value: '2',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[2],
					label: '3 - Enteral nutrition (nasogastric, gastrostomy, jejunostomy, or any other artificial entry into the alimentary canal)',
					value: '3',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[3],
					label: '4 - None of the above',
					value: '4',
					onChange: this._checkboxChange
				})
			])
        ]);
	}
}

export default M1030;
