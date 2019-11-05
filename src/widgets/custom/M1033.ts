import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
import Card from './Card';
import Checkbox from '@dojo/widgets/checkbox';
/**

 * @type M1033
 *
 * Properties that can be set on M1033
 */
 export interface M1033Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1033 extends ThemedMixin(WidgetBase)<M1033Properties> {
	private is_checked: boolean[] = [false];

	private _checkboxChange(idx: string) {
		let index = parseInt(idx) - 1;
		this.is_checked[index] = ! this.is_checked[index];
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M1033'}, [
            v('h5',{classes: [css.black, css.code]},['M1033']),
			v('p', {classes: [css.label]}, ['Risk for Hospitalization(Mark all that apply.)']),
			v('p', {classes: [css.label]}, ['Which of the following signs or symptoms characterize this patient as at risk for hospitalization? (Mark all that apply.) ']),
			v('div', [
				w(Checkbox, {
					checked: this.is_checked[0],
					label: '1 - History of falls (2 or more falls - or any fall with an injury - in the past 12 months)',
					value: '1',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[1],
					label: '2 - Unintentional weight loss of a total of 10 pounds or more in the past 12 months',
					value: '2',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[2],
					label: '3 - Multiple hospitalizations (2 or more) in the past 6 months',
					value: '3',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[3],
					label: '4 - Multiple emergency department visits (2 or more) in the past 6 months',
					value: '4',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[4],
					label: '5 - Decline in mental, emotional, or behavioral status in the past 3 months',
					value: '5',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[5],
					label: '6 - Reported or observed history of difficulty complying with any medical instructions (for example, medications, diet, exercise) in the past 3 months',
					value: '6',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[6],
					label: '7 - Currently taking 5 or more medications',
					value: '7',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[7],
					label: '8 - Currently reports exhaustion',
					value: '8',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[8],
					label: '9 - Other risk(s) not listed in 1 - 8',
					value: '9',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[9],
					label: ' 10 - None of the above',
					value: '10',
					onChange: this._checkboxChange
				})
			])
        ]);
	}
}

export default M1033;
