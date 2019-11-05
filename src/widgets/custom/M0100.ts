import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
import Card from './Card';
import Radio from '@dojo/widgets/radio';
/**

 * @type M0100
 *
 * Properties that can be set on M0100
 */
 export interface M0100Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M0100 extends ThemedMixin(WidgetBase)<M0100Properties> {
	private _selectedRadio = '1';
	private _radioChange(value: string) {
		this._selectedRadio = value;
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M0100'}, [
            v('h5',{classes: [css.black, css.code]},['M0100']),
			v('p', {classes: [css.label]}, ['This Assessment is Currently Being Completed for the Following Reason']),
			v('h5',{classes: [css.black, css.code, css.underline]},['Start/Resumption of care']),
			v('div', [
				w(Radio, {
					checked: this._selectedRadio === '1',
					value: '1',
					label: '1 - Start of care - further visits planned',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '3',
					value: '3',
					label: '3 - Resumption of Care(after inpatient stay) ',
					name: 'gender',
					onChange: this._radioChange
				}),
				v('h5',{classes: [css.black, css.code, css.underline]},['Follow-Up']),
				w(Radio, {
					checked: this._selectedRadio === '4',
					value: '4',
					label: '4 - Recertification (follow-up) reassessment [Go to M0110]',
					name: 'gender',
					onChange: this._radioChange
				}),,
				w(Radio, {
					checked: this._selectedRadio === '5',
					value: '5',
					label: '5 - Other follow-up [Go to M0110]',
					name: 'gender',
					onChange: this._radioChange
				}),
				v('h5',{classes: [css.black, css.code, css.underline]},['Transfer to an Inpatient Facility']),
				w(Radio, {
					checked: this._selectedRadio === '6',
					value: '6',
					label: '6 - Transferred to an inpatient facility - patient not discharged from agency [Go to M1041]',
					name: 'gender',
					onChange: this._radioChange
				}),,
				w(Radio, {
					checked: this._selectedRadio === '7',
					value: '7',
					label: '7 - Transferred to an inpatient facility - patient discharged from agency [Go to M1041]',
					name: 'gender',
					onChange: this._radioChange
				}),
				v('h5',{classes: [css.black, css.code, css.underline]},['Discharge from Agency - Not to an Inpatient Facility']),
				w(Radio, {
					checked: this._selectedRadio === '8',
					value: '8',
					label: '8 - Death at home [Go to M2005]',
					name: 'gender',
					onChange: this._radioChange
				}),,
				w(Radio, {
					checked: this._selectedRadio === '9',
					value: '9',
					label: '9 - Discharge from agency [Go to M1041]',
					name: 'gender',
					onChange: this._radioChange
				}),
			])
        ]);
	}
}

export default M0100;
