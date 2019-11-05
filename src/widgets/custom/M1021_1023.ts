import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
import * as style from './styles/M1021_1023.m.css';
import Card from './Card';
import CustomTextField from './CustomTextField';
import TextInput from '@dojo/widgets/text-input';
import { Constructor } from '@dojo/framework/widget-core/interfaces';
import Radio from '@dojo/widgets/radio';
/**

 * @type M1021_1023
 *
 * Properties that can be set on M1021_1023
 */
// const SelectClasses = {
// 	"./custom/CustomTextField": {
// 		root: [css.root],
// 		input: [css.root]
// 	}
// };
const HalfWidthClass = {
	"@dojo/widgets/radio": {
		root: [style.root],
		label: [style.label]
	}
};
 export interface M1021_1023Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1021_1023 extends ThemedMixin(WidgetBase)<M1021_1023Properties> {
	private _state: any = {};
	private col2_a_option = '0';
	private col2_b_option = '0';
	private col2_c_option = '0';
	private col2_d_option = '0';
	private col2_e_option = '0';
	private col2_f_option = '0';
	private col2_a_option_change(value: string) {
		this.col2_a_option = value;
		this.invalidate();
	}
	private col2_b_option_change(value: string) {
		this.col2_b_option = value;
		this.invalidate();
	}
	private col2_c_option_change(value: string) {
		this.col2_c_option = value;
		this.invalidate();
	}
	private col2_d_option_change(value: string) {
		this.col2_d_option = value;
		this.invalidate();
	}
	private col2_e_option_change(value: string) {
		this.col2_e_option = value;
		this.invalidate();
	}
	private col2_f_option_change(value: string) {
		this.col2_f_option = value;
		this.invalidate();
	}
	private createInput<W extends WidgetBase>(
		
		Widget: Constructor<W>,
		props: W['properties'] & { key: string },
		options: { cbName: string, initialValue: string } = { cbName: 'onInput', initialValue: '' }
	) {
		const { cbName = 'onInput', initialValue = '' } = options;
		if (!this._state[props.key]) {
			this._state[props.key] = initialValue;
		}
		return w(Widget, {
			...(props as any),
			value: this._state[props.key],
			[cbName]: (value: string) => {
				this._state[props.key] = value;
				this.invalidate();
			}
		});
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M1021_1023'}, [
            v('h5',{classes: [css.black, css.code]},['M1021/1023']),
			v('p', {classes: [css.label]}, ['Diagnoses and Symptom Control']),
			v('p', {classes: [css.label, css.justify]}, ['List each diagnosis for which the patient is receiving home care (Column 1) and enter its ICD-10-CM code at the level of highest specificity in Column 2 (diagnosis codes only - no surgical or procedure codes allowed). \
			Diagnoses are listed in the order that best reflects the seriousness of each condition and supports the disciplines and services provided. Rate the degree of symptom control for each condition in (Column 2). \
			ICD-10-CM sequencing requirements must be followed if multiple coding is indicated for any diagnoses. \
			Code each row according to the following directions for each column:']),
			v('div',{},[
				v('p',{classes: [css.label, css.margin_bottom_small]},['Column 1: ']),
				v('p',{classes: [css.justify, css.label, css.margin_top_small, css.text_indext]},['Enter the description of the diagnosis. Sequencing of diagnoses should reflect the seriousness of each condition and support the disciplines and services provided. '])
			]),
			v('div',{},[
				v('p',{classes: [css.label, css.margin_bottom_small]},['Column 2: ']),
				v('div',{classes: [css.justify, css.text_indext]},[
					v('p',{classes: [css.label, css.margin_top_small]},['Enter the ICD-10-CM code for the condition described in Column 1 - no surgical or procedure codes allowed. Codes must be entered at the level of highest specificity and ICD-10-CM coding rules and sequencing requirements must be followed. Note that external cause codes (ICD-10-CM codes beginning with V, W, X, or Y) may not be reported in M1021 (Primary Diagnosis) but may be reported in M1023 (Secondary Diagnoses). Also note that when a Z-code is reported in Column 2, the code for the underlying condition can often be entered in Column 2, as long as it is an active on-going condition impacting home health care. \
					Rate the degree of symptom control for the condition listed in Column 1. Do not assign a symptom control rating if the diagnosis code is a V, W, X, Y or Z-code. Choose one value that represents the degree of symptom control appropriate for each diagnosis using the following scale:']),
					v('p',{classes: [css.text_indext, css.label, css.margin_bottom_small, css.margin_top_small, css.text_indext]},['0 - Asymptomatic, no treatment needed at this time']),
					v('p',{classes: [css.text_indext, css.label, css.margin_bottom_small, css.margin_top_small, css.text_indext]},['2 - Symptoms controlled with difficulty, affecting daily functioning; patient needs ongoing monitoring']),
					v('p',{classes: [css.text_indext, css.label, css.margin_bottom_small, css.margin_top_small, css.text_indext]},['3 - Symptoms poorly controlled; patient needs frequent adjustment in treatment and dose monitoring']),
					v('p',{classes: [css.text_indext, css.label, css.margin_top_small, css.text_indext]},['4 - Symptoms poorly controlled; history of re-hospitalizations']),
					v('p',{classes: [css.label, css.margin_top_small]},['Note that the rating for symptom control in Column 2 should not be used to determine the sequencing of the diagnoses listed in Column 1. These are separate items and sequencing may not coincide.'])
				]),
				
				
			]),
			v('h5',{classes: [css.black, css.code]},['(M1021) Primary Diagnosis & (M1023) Other Diagnoses']),
			v('table',{},[
				v('tr',{},[
					v('th',{},['Column1'])
				]),
				v('tr',{},[
					v('td',{},['Diagnoses (Sequencing of diagnoses should reflect the seriousness of each condition and support the disciplines and services provided.)'])
				]),
				v('tr',{},[
					v('td',{},['Description'])
				]),
				v('tr',{},[
					v('td',{},[
						v('p',{classes: [css.code]},['(M1021) Primary Diagnosis']),
						w(CustomTextField, { 
							key: 'col1_desc_a',
							label: '',
							widthHalf: true,
							inside: true,
							inlineLabel: 'a. '
						}),
					])
				]),
				v('tr',{},[
					v('td',{},[
						v('p',{classes: [css.code]},['(M1023) Other Diagnoses']),
						w(CustomTextField, { 
							key: 'col1_desc_b',
							label: '',
							value: '',
							widthHalf: true,
							inside: true,
							inlineLabel: 'b. '
						}),
					])
				]),
				v('tr',{},[
					v('td',{},[
						w(CustomTextField, { 
							key: 'col1_desc_c',
							label: '',
							value: '',
							widthHalf: true,
							inside: true,
							inlineLabel: 'c. '
						}),
					])
				]),
				v('tr',{},[
					v('td',{},[
						w(CustomTextField, { 
							key: 'col1_desc_d',
							label: '',
							value: '',
							widthHalf: true,
							inside: true,
							inlineLabel: 'd. '
						}),
					])
				]),
				v('tr',{},[
					v('td',{},[
						w(CustomTextField, { 
							key: 'col1_desc_e',
							label: '',
							value: '',
							widthHalf: true,
							inside: true,
							inlineLabel: 'e. '
						}),
					])
				]),
				v('tr',{},[
					v('td',{},[
						w(CustomTextField, { 
							key: 'col1_desc_f',
							label: '',
							value: '',
							widthHalf: true,
							inside: true,
							inlineLabel: 'f. '
						}),
					])
				]),
			]),
			v('table',{},[
				v('tr',{},[
					v('th',{},['Column2'])
				]),
				v('tr',{},[
					v('td',{},['ICD-10-CM and symptom control rating for each condition. Note that the sequencing of these ratings may not match the sequencing of the diagnoses.'])
				]),
				v('tr',{},[
					v('td',{},['ICD-10-CM / Symptom Control Rating'])
				]),
				v('tr',{},[
					v('td',{},[
						v('p',{classes: [css.code]},['V, W, X, Y codes NOT allowed']),
						v('p',{},['a. ']),
						this.createInput(TextInput,{key:'col2_a'}),
						v('div', [
							w(Radio, {
								classes: HalfWidthClass,
								checked: this.col2_a_option === '0',
								value: '0',
								label: '0',
								name: 'col2_a_option',
								onChange: this.col2_a_option_change
							}),
							w(Radio, {
								classes: HalfWidthClass,
								checked: this.col2_a_option === '1',
								value: '1',
								label: '1',
								name: 'gender',
								onChange: this.col2_a_option_change
							}),
							w(Radio, {
								classes: HalfWidthClass,
								checked: this.col2_a_option === '2',
								value: '2',
								label: '2',
								name: 'gender',
								onChange: this.col2_a_option_change
							}),
							w(Radio, {
								classes: HalfWidthClass,
								checked: this.col2_a_option === '3',
								value: '3',
								label: '3',
								name: 'gender',
								onChange: this.col2_a_option_change
							}),
							w(Radio, {
								classes: HalfWidthClass,
								checked: this.col2_a_option === '4',
								value: '4',
								label: '4',
								name: 'gender',
								onChange: this.col2_a_option_change
							}),
						]),
					])
				]),
				v('tr',{},[
					v('td',{},[
						v('p',{classes: [css.margin_bottom_small, css.code]},['All ICD-10–C M codes allowed']),
						v('div',{},[
							v('p',{},['b. ']),
							v('div',{},[
								this.createInput(TextInput,{key:'col2_b'}),
								v('div', [
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_b_option === '0',
										value: '0',
										label: '0',
										name: 'col2_a_option',
										onChange: this.col2_b_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_b_option === '1',
										value: '1',
										label: '1',
										name: 'gender',
										onChange: this.col2_b_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_b_option === '2',
										value: '2',
										label: '2',
										name: 'gender',
										onChange: this.col2_b_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_b_option === '3',
										value: '3',
										label: '3',
										name: 'gender',
										onChange: this.col2_b_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_b_option === '4',
										value: '4',
										label: '4',
										name: 'gender',
										onChange: this.col2_b_option_change
									}),
								])
							])
						])
					])
				]),
				v('tr',{},[
					v('td',{},[
						v('p',{classes: [css.margin_bottom_small, css.code]},['All ICD-10–C M codes allowed']),
						v('div',{},[
							v('p',{},['c. ']),
							v('div',{},[
								this.createInput(TextInput,{key:'col2_c'}),
								v('div', [
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_c_option === '0',
										value: '0',
										label: '0',
										name: 'col2_a_option',
										onChange: this.col2_c_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_c_option === '1',
										value: '1',
										label: '1',
										name: 'gender',
										onChange: this.col2_c_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_c_option === '2',
										value: '2',
										label: '2',
										name: 'gender',
										onChange: this.col2_c_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_c_option === '3',
										value: '3',
										label: '3',
										name: 'gender',
										onChange: this.col2_c_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_c_option === '4',
										value: '4',
										label: '4',
										name: 'gender',
										onChange: this.col2_c_option_change
									}),
								]),
		
							])
						])
					])
				]),
				v('tr',{},[
					v('td',{},[
						v('div',{},[
							v('p',{},['d. ']),
							v('div',{},[
								this.createInput(TextInput,{key:'col2_d'}),
								v('div', [
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_d_option === '0',
										value: '0',
										label: '0',
										name: 'col2_a_option',
										onChange: this.col2_d_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_d_option === '1',
										value: '1',
										label: '1',
										name: 'gender',
										onChange: this.col2_d_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_d_option === '2',
										value: '2',
										label: '2',
										name: 'gender',
										onChange: this.col2_d_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_d_option === '3',
										value: '3',
										label: '3',
										name: 'gender',
										onChange: this.col2_d_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_d_option === '4',
										value: '4',
										label: '4',
										name: 'gender',
										onChange: this.col2_d_option_change
									}),
								]),
							])
						])
					])
				]),
				v('tr',{},[
					v('td',{},[
						v('div',{},[
							v('p',{},['e. ']),
							v('div',{},[
								this.createInput(TextInput,{key:'col2_e'}),
								v('div', [
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_e_option === '0',
										value: '0',
										label: '0',
										name: 'col2_a_option',
										onChange: this.col2_e_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_e_option === '1',
										value: '1',
										label: '1',
										name: 'gender',
										onChange: this.col2_e_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_e_option === '2',
										value: '2',
										label: '2',
										name: 'gender',
										onChange: this.col2_e_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_e_option === '3',
										value: '3',
										label: '3',
										name: 'gender',
										onChange: this.col2_e_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_e_option === '4',
										value: '4',
										label: '4',
										name: 'gender',
										onChange: this.col2_e_option_change
									}),
								]),
							])
						])
					])
				]),
				v('tr',{},[
					v('td',{},[
						v('div',{},[
							v('p',{},['f. ']),
							v('div',{},[
								this.createInput(TextInput,{key:'col2_f'}),
								v('div', [
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_f_option === '0',
										value: '0',
										label: '0',
										name: 'col2_a_option',
										onChange: this.col2_f_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_f_option === '1',
										value: '1',
										label: '1',
										name: 'gender',
										onChange: this.col2_f_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_f_option === '2',
										value: '2',
										label: '2',
										name: 'gender',
										onChange: this.col2_f_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_f_option === '3',
										value: '3',
										label: '3',
										name: 'gender',
										onChange: this.col2_f_option_change
									}),
									w(Radio, {
										classes: HalfWidthClass,
										checked: this.col2_f_option === '4',
										value: '4',
										label: '4',
										name: 'gender',
										onChange: this.col2_f_option_change
									}),
								]),
							])
						])
					])
				]),
			]),
		]);
	}
}

export default M1021_1023;
