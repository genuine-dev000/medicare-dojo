import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
import Card from './Card';
import Radio from '@dojo/widgets/radio';
import Button from '@dojo/widgets/button';

/**

 * @type M1730
 *
 * Properties that can be set on M1730
 */
const SelectClasses = {
	"@dojo/widgets/button": {
		root: [css.button]
	}
};
 export interface M1730Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1730 extends ThemedMixin(WidgetBase)<M1730Properties> {
	private _selectedRadio = '1';
	private a_selectedRadio = '1';
	private b_selectedRadio = '1';
	private a_radioChange(value: string) {
		this.a_selectedRadio = value;
		this.invalidate();
	}
	private b_radioChange(value: string) {
		this.b_selectedRadio = value;
		this.invalidate();
	}
	private _radioChange(value: string) {
		this._selectedRadio = value;
		this.invalidate();
	}
	private onClearBtnClicked(){
		this._selectedRadio = '-1';
		this.invalidate();
	}
	private onAClearBtnClicked(){
		this.a_selectedRadio = '-1';
		this.invalidate();
	}
	private onBClearBtnClicked(){
		this.b_selectedRadio = '-1';
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M1730'}, [
			v('h5',{classes: [css.black, css.code]},['M1730']),
			v('p', {classes: [css.label]}, ['Depression Screening']),
			v('p', {classes: [css.label]}, ['Has the patient been screened for depression, using a standardized depression screening tool?']),
			v('div', {style: 'margin-left:0em'},[
				w(Radio, {
					checked: this._selectedRadio === '1',
					value: '1',
					label: '0 - No',
					name: 'gender',
					onChange: this._radioChange
				}),
				v('div',{},[
					w(Radio, {
						checked: this._selectedRadio === '2',
						value: '2',
						label: '1 - Yes, patient was screened using the PHQ-2©* scale.',
						name: 'gender',
						onChange: this._radioChange
					}),
					v('div',{style: 'padding-left:1.6em'},[
						v('p', {style: 'margin-bottom:0.5em;font-weight:600', classes: [css.margin_bottom_small, css.label]}, ['PHQ-2©*']),
						v('p', {style: 'margin-bottom:0.5em;color: var(--color-text-faded);', classes: [css.margin_top_small, css.margin_bottom_small, css.label]}, ['a) Little interest or pleasure in doing things']),
						v('div',{},[
							w(Radio, {
								checked: this.a_selectedRadio === '1',
								value: '1',
								label: 'Not at all 0 - 1 day',
								name: 'gender',
								onChange: this.a_radioChange
							}),
							w(Radio, {
								checked: this.a_selectedRadio === '2',
								value: '2',
								label: 'Several days 2 - 6 days',
								name: 'gender',
								onChange: this.a_radioChange
							}),
							w(Radio, {
								checked: this.a_selectedRadio === '3',
								value: '3',
								label: 'More than half of the days 7 – 11 days',
								name: 'gender',
								onChange: this.a_radioChange
							}),
							w(Radio, {
								checked: this.a_selectedRadio === '4',
								value: '4',
								label: 'Nearly every day 12 – 14 days',
								name: 'gender',
								onChange: this.a_radioChange
							}),
							w(Radio, {
								checked: this.a_selectedRadio === '5',
								value: '5',
								label: 'N/A Unable to respond',
								name: 'gender',
								onChange: this.a_radioChange
							}),
							v('div',{style: 'text-align:center;margin: 1em 0 0.5em 0'},[
								w(Button,{
									classes: SelectClasses,
									onClick: this.onAClearBtnClicked
								},
								['Clear'])
							])
						])
					]),
					v('div',{style: 'padding-left:1.6em'},[
						v('p', {style: 'margin-bottom:0.5em;font-weight:600', classes: [css.margin_bottom_small, css.label]}, ['PHQ-2©*']),
						v('p', {style: 'margin-bottom:0.5em;color: var(--color-text-faded);', classes: [css.margin_top_small, css.margin_bottom_small, css.label]}, ['b) Feeling down, depressed, or hopeless?']),
						v('div',{},[
							w(Radio, {
								checked: this.b_selectedRadio === '1',
								value: '1',
								label: 'Not at all 0 - 1 day',
								name: 'gender',
								onChange: this.b_radioChange
							}),
							w(Radio, {
								checked: this.b_selectedRadio === '2',
								value: '2',
								label: 'Several days 2 - 6 days',
								name: 'gender',
								onChange: this.b_radioChange
							}),
							w(Radio, {
								checked: this.b_selectedRadio === '3',
								value: '3',
								label: 'More than half of the days 7 – 11 days',
								name: 'gender',
								onChange: this.b_radioChange
							}),
							w(Radio, {
								checked: this.b_selectedRadio === '4',
								value: '4',
								label: 'Nearly every day 12 – 14 days',
								name: 'gender',
								onChange: this.b_radioChange
							}),
							w(Radio, {
								checked: this.b_selectedRadio === '5',
								value: '5',
								label: 'N/A Unable to respond',
								name: 'gender',
								onChange: this.b_radioChange
							}),
							v('div',{style: 'text-align:center;margin: 1em 0 0.5em 0'},[
								w(Button,{
									classes: SelectClasses,
									onClick: this.onBClearBtnClicked
								},
								['Clear'])
							])
						])
					])
				]),
				w(Radio, {
					checked: this._selectedRadio === '3',
					value: '3',
					label: '2 - Yes, with a different standardized assessment-and the patient meets criteria for further evaluation for depression.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '4',
					value: '4',
					label: '3 - Yes, patient was screened with a different standardized assessment-and the patient does not meet criteria for further evaluation for depression.',
					name: 'gender',
					onChange: this._radioChange
				}),
				v('div',{style: 'text-align:center;margin: 1em 0 0.5em 0'},[
					w(Button,{
						classes: SelectClasses,
						onClick: this.onClearBtnClicked
					},
					['Clear'])
				])
			])
        ]);
	}
}

export default M1730;
