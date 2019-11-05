import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/M0150.m.css';
import Card from './Card';
import Checkbox from '@dojo/widgets/checkbox';
/**

 * @type M1740
 *
 * Properties that can be set on M1740
 */

 export interface M1740Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1740 extends ThemedMixin(WidgetBase)<M1740Properties> {
	private is_checked: boolean[] = [false];

	private _checkboxChange(idx: string) {
		let index = parseInt(idx);
		this.is_checked[index] = ! this.is_checked[index];
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M1740'}, [
            v('h5',{classes: [css.black, css.code]},['M1740']),
			v('p', {classes: [css.label, css.margin_bottom_small]}, ['Cognitive, behavioral, and psychiatric symptoms that are demonstrated at least once a week : (Reported or Observed)']),
			v('p', {classes: [css.label, css.margin_top_small]}, ['( Mark all that apply )']),
			v('div', [
				w(Checkbox, {
					checked: this.is_checked[0],
					label: '1 - Memory deficit: failure to recognize familiar persons/places, inability to recall events of past 24 hours, significant memory loss so that supervision is required',
					value: '0',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[1],
					label: '2 - Impaired decision-making: failure to perform usual ADLs or IADLs, inability to appropriately stop activities, jeopardizes safety through actions',
					value: '1',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[2],
					label: '3 - Verbal disruption: yelling, threatening, excessive profanity, sexual references, etc.',
					value: '2',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[3],
					label: '4 - Physical aggression: aggressive or combative to self and others (e.g., hits self, throws objects, punches, dangerous maneuvers with wheelchair or other objects)',
					value: '3',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[4],
					label: '5 - Disruptive, infantile, or socially inappropriate behavior (excludes verbal actions)',
					value: '4',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[5],
					label: '6 - Delusional, hallucinatory, or paranoid behavior',
					value: '5',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_checked[6],
					label: '7 - None of the above behaviors demonstrated',
					value: '6',
					onChange: this._checkboxChange
				}),
			])
        ]);
	}
}

export default M1740;
