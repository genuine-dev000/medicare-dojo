import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
import Card from './Card';
import Select from '@dojo/widgets/select';
/**

 * @type GG0130
 *
 * Properties that can be set on GG0130
 */

 export interface GG0130Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class GG0130 extends ThemedMixin(WidgetBase)<GG0130Properties> {
	private options = ['06. Independent','05. Setup or clean-up assistance', '04. Supervision or touching assistance', '03. Partial/moderate assistance', '02. Substantial/maximal assistance', '01. Dependent', '07. Patient refused', '09. Not applicable', '10. Not attempted due to environmental limitations', '88. Not attempted due to medical condition or safety concerns'];
	private selectedValues: string[] = [];
	private _onSelectOption(option: any, key: string | number){
		let index: number;
		if (typeof key === 'string')
			index = parseInt(key);
		else
			index = key;
		this.selectedValues[index] = option;
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-GG0130'}, [
			v('h5',{classes: [css.black, css.code]},['GG0130. Self-Care']),
			v('p', {classes: [css.label]}, ['Code the patient\'s usual performance at SOC/ROC for each activity using the 6-point scale. If activity was not attempted at SOC/ROC, code the reason. Code the patient\'s discharge goal(s) using the 6-point scale. Use of codes 07,09,10 or 88 is permissible to code discharge goal(s).']),
			v('p', {style:'font-weight:600', classes: [css.margin_bottom_small, css.label]}, ['Coding:']),
			v('p', {classes: [css.margin_bottom_small, css.label]}, ['Safety and Quality of Performance - If helper assistance is required because patient’s performance is unsafe or of poor quality, score according to amount of assistance provided.']),
			v('p', {classes: [css.label]}, ['Activity may be completed with or without assistive devices.']),
			v('div',{style: 'margin-left:0.8em'},[
				v('p', {classes: [css.margin_top_small, css.label]}, ['06. Independent – Patient completes the activity by him/herself with no assistance from a helper.']),
				v('p', {classes: [css.margin_top_small, css.label]}, ['05. Setup or clean-up assistance – Helper SETS UP or CLEANS UP; patient completes activity. Helper assists only prior to or following the activity.']),
				v('p', {classes: [css.margin_top_small, css.label]}, ['04. Supervision or touching assistance – Helper provides VERBAL CUES or TOUCHING/STEADYING and/or contact guard assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently.']),
				v('p', {classes: [css.margin_top_small, css.label]}, ['03. Partial/moderate assistance – Helper does LESS THAN HALF the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort.']),
				v('p', {classes: [css.margin_bottom_small, css.label]}, ['02. Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort.']),
				v('p', {classes: [css.margin_bottom_small, css.label]}, ['01. Dependent – Helper does ALL of the effort. Patient does none of the effort to complete the activity. Or, the assistance of 2 or more helpers is required for the patient to complete the activity.']),
				v('p', {classes: [css.margin_bottom_small, css.label]}, ['If activity was not attempted, code reason:']),
				v('p', {classes: [css.margin_bottom_small, css.label]}, ['07. Patient refused']),
				v('p', {classes: [css.margin_bottom_small, css.label]}, ['09. Not applicable - Not attempted and the ptient did not perform this activity prior to the current illness.']),
				v('p', {classes: [css.margin_bottom_small, css.label]}, ['10. Not attempted due to environmental limitations - (eg. lack of equipment, weather constraints)']),
				v('p', {classes: [css.margin_bottom_small, css.label]}, ['88. Not attempted due to medical condition or safety concerns']),
			]),
			v('p', {style:'font-weight:600', classes: [css.margin_bottom_small, css.label]}, ['Enter the Codes in Boxes']),
			v('div',{style: 'margin-left:0.8em'},[
				v('p', {classes: [css.margin_top_small, css.label]}, ['A. Eating: The ability to use suitable utensils to bring food and/or liquid to the mouth and swallow food and/or liquid once the meal is placed before the paient.']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 0,
					onChange: this._onSelectOption,
					value: this.selectedValues[0]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 1,
					onChange: this._onSelectOption,
					value: this.selectedValues[1]
				}),
				v('p', {classes: [css.label]}, ['B. Oral Hygiene: The ability to use suitable items to clean teeth. Dentures (if applicable). The ability to remove and replace dentures from and to the mouth, and manage equipment for soaking and rinsing them.']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 2,
					onChange: this._onSelectOption,
					value: this.selectedValues[2]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 3,
					onChange: this._onSelectOption,
					value: this.selectedValues[3]
				}),
				v('p', {classes: [css.label]}, ['C. Toileting Hypiene: The ability to maintain perineal hygiene, adjust clothes before and afte voiding or having a bowel movement. if meanaging an ostomy, include wiping the opening but not managing equipment.']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 4,
					onChange: this._onSelectOption,
					value: this.selectedValues[4]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 5,
					onChange: this._onSelectOption,
					value: this.selectedValues[5]
				}),
				v('p', {classes: [css.label]}, ['E. Shower/bathe self: The ability to bathe self, including washing, rinsing and drying self (excludes washing of back and hair). Does not include transferring in/out of tub/shower.']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 6,
					onChange: this._onSelectOption,
					value: this.selectedValues[6]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 7,
					onChange: this._onSelectOption,
					value: this.selectedValues[7]
				}),
				v('p', {classes: [css.label]}, ['F. Upper body dressing: The ability to dress and undress above the eaist; including fasteners, if applicable.']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 8,
					onChange: this._onSelectOption,
					value: this.selectedValues[8]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 9,
					onChange: this._onSelectOption,
					value: this.selectedValues[9]
				}),
				v('p', {classes: [css.label]}, ['G. Lower body dressing: The ability to dress and undress below the waist; including fasterners, does not include footwear.']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 10,
					onChange: this._onSelectOption,
					value: this.selectedValues[10]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 11,
					onChange: this._onSelectOption,
					value: this.selectedValues[11]
				}),
				v('p', {classes: [css.label]}, ['H. Putting on/taking off footwear: The ability to put on and take off socks and shoes or other footwear that is appropriate for safe mobility; including fasterners, if applicable.']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 12,
					onChange: this._onSelectOption,
					value: this.selectedValues[12]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 13,
					onChange: this._onSelectOption,
					value: this.selectedValues[13]
				}),
			]),
        ]);
	}
}

export default GG0130;
