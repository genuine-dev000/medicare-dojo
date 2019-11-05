import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
import Card from './Card';
import Select from '@dojo/widgets/select';
import Radio from '@dojo/widgets/radio';
/**

 * @type GG0170
 *
 * Properties that can be set on GG0170
 */

 export interface GG0170Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class GG0170 extends ThemedMixin(WidgetBase)<GG0170Properties> {
	private options = ['06. Independent','05. Setup or clean-up assistance', '04. Supervision or touching assistance', '03. Partial/moderate assistance', '02. Substantial/maximal assistance', '01. Dependent', '07. Patient refused', '09. Not applicable', '10. Not attempted due to environmental limitations', '88. Not attempted due to medical condition or safety concerns'];
	private selectedValues: string[] = [];
	private sub_selectedRadioA = '-1';
	private sub_selectedRadioB = '-1';
	private sub_selectedRadioC = '-1';
	private sub_radioCChange(value: string) {
		this.sub_selectedRadioC = value;
		this.invalidate();
	}
	private sub_radioAChange(value: string) {
		this.sub_selectedRadioA = value;
		this.invalidate();
	}
	private sub_radioBChange(value: string) {
		this.sub_selectedRadioB = value;
		this.invalidate();
	}
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
		return w(Card,{key: 'card-GG0170'}, [
			v('h5',{classes: [css.black, css.code]},['GG0170. Mobility']),
			v('p', {classes: [css.label]}, ['Code the patient\'s usual performance at SOC/ROC for each activity using the 6-point scale. If activity was not attempted at SOC/ROC, code the reason. Code the patient\'s discharge goal(s) using the 6-point scale. Use of codes 07,09,10 or 88 is paermsissibnle to code discharge goal(s).']),
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
				
				v('p', {classes: [css.margin_top_small, css.label]}, ['A. Roll left and right: The ability to roll from lying on back to left and right side, and return to lying on back on the bed.']),
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
				v('p', {classes: [css.label]}, ['B. Sit ot lying: The ability to move from sitting on side of bed to lying flat on the bed.']),
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
				v('p', {classes: [css.label]}, ['C. Lying to sitting on side of bed: The ability to move from lying on the back to sitting on the side of the bed with feet flat on the floor, and with no back support.']),
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
				v('p', {classes: [css.label]}, ['D. Sit to stand: The ability to come to a standing position for sitting in a chair, wheelchair, or on the side of the bed.']),
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
				v('p', {classes: [css.label]}, ['E. Chair/bed-to-char transfer: The ability to transfer to andfrom a bed to a chair (or wheelchair).']),
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
				v('p', {classes: [css.label]}, ['F. Toilet transfer: The ability to get on and off a toilet or commode.']),
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
				v('p', {classes: [css.label]}, ['G. Car Transfer: The ability to transfer in and out of a car or van on the passenger side. Does not include the ability to open/closes door or fasten seat belt.']),
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
				v('p', {classes: [css.label]}, ['I. Walk 10 feet:Once standing, the ability to walk at least 10 feet in a room, corridor, or similar space. If SOC/ROC performance is coded 07, 09, 10 or 88, skip to GG0170M, 1 step(crub)']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 14,
					onChange: this._onSelectOption,
					value: this.selectedValues[14]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 15,
					onChange: this._onSelectOption,
					value: this.selectedValues[15]
				}),
				v('p', {classes: [css.label]}, ['J. Walk 50 feet with two turns:Once standing, the ability to walk 50 feet and make two turns. ']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 16,
					onChange: this._onSelectOption,
					value: this.selectedValues[16]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 17,
					onChange: this._onSelectOption,
					value: this.selectedValues[17]
				}),
				v('p', {classes: [css.label]}, ['K. :Walk 150 feetOnce standing, the ability to walk at least 150 feet in a corridor or similar space. ']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 18,
					onChange: this._onSelectOption,
					value: this.selectedValues[18]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 19,
					onChange: this._onSelectOption,
					value: this.selectedValues[19]
				}),
				v('p', {classes: [css.label]}, ['L. Walking 10 feet on uneven surfaces:The ability to walk 10 feet on uneven or sloping surfaces (indoor or outdoor), such as turf or gravel. ']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 20,
					onChange: this._onSelectOption,
					value: this.selectedValues[20]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 21,
					onChange: this._onSelectOption,
					value: this.selectedValues[21]
				}),
				v('p', {classes: [css.label]}, ['M. 1 step (curb):The ability to go up and down a curb and/or up and down one step. If SOC/ROC performance is coded 07, 09, 10 or 88, skip to GG0170P, Picking up object. ']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 22,
					onChange: this._onSelectOption,
					value: this.selectedValues[22]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 23,
					onChange: this._onSelectOption,
					value: this.selectedValues[23]
				}),
				v('p', {classes: [css.label]}, ['N. 4 steps::The ability to go up and down four steps with or without a rail. If SOC/ROC performance is coded 07, 09, 10 or 88, skip to GG0170P, Picking up object.']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 24,
					onChange: this._onSelectOption,
					value: this.selectedValues[24]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 25,
					onChange: this._onSelectOption,
					value: this.selectedValues[25]
				}),
				v('p', {classes: [css.label]}, ['O. 12 steps:The ability to go up and down 12 steps with or without a rail.']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 26,
					onChange: this._onSelectOption,
					value: this.selectedValues[26]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 27,
					onChange: this._onSelectOption,
					value: this.selectedValues[27]
				}),
				v('p', {classes: [css.label]}, ['P. Picking up object:The ability to bend/stoop from a standing position to pick up a small object, such as a spoon, from the floor.']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 28,
					onChange: this._onSelectOption,
					value: this.selectedValues[28]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 29,
					onChange: this._onSelectOption,
					value: this.selectedValues[29]
				}),
				v('p', {classes: [css.label]}, ['Q. Does patient use wheelchair and/or scooter?']),
				v('div',{style: 'margin: 0.5em 0em 0.5em 0em'},[
					w(Radio, {
						checked: this.sub_selectedRadioA === '1',
						value: '1',
						label: ' 0 - No - Skip GG0170R,GG0170RR1,GG0170S and GG0170SS1',
						name: 'gender',
						onChange: this.sub_radioAChange
					}),
					w(Radio, {
						checked: this.sub_selectedRadioA === '2',
						value: '2',
						label: '1 - Yes - Continue to GG0170R,Wheel 50 feet with two turns.',
						name: 'gender',
						onChange: this.sub_radioAChange
					}),
				]),
				v('p', {classes: [css.label]}, ['R. Wheel 50 fee with two turns:Once seated in wheelchair/scooter, the ability to wheel at least 50 feet and make two turns. ']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 30,
					onChange: this._onSelectOption,
					value: this.selectedValues[30]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 31,
					onChange: this._onSelectOption,
					value: this.selectedValues[31]
				}),
				v('p', {classes: [css.label]}, ['RR1. Indicate the type of wheelchair or scooter used.']),
				v('div',{style: 'margin: 0'},[
					w(Radio, {
						checked: this.sub_selectedRadioB === '1',
						value: '1',
						label: ' 0 - No - Skip GG0170R,GG0170RR1,GG0170S and GG0170SS1',
						name: 'gender',
						onChange: this.sub_radioBChange
					}),
					w(Radio, {
						checked: this.sub_selectedRadioB === '2',
						value: '2',
						label: '1 - Yes - Continue to GG0170R,Wheel 50 feet with two turns.',
						name: 'gender',
						onChange: this.sub_radioBChange
					}),
				]),
				v('p', {classes: [css.label]}, ['S. Wheel 150 feet:Once seated in wheelchair/scooter, the ability to wheel at least 150 feet in a corridor or similar space. ']),
				v('p', {classes: [css.label]}, ['1. SOC/ROC Performance']),
				w(Select,{
					options: this.options,
					key: 32,
					onChange: this._onSelectOption,
					value: this.selectedValues[32]
				}),
				v('p', {classes: [css.label]}, ['2. Discharge Goal']),
				w(Select,{
					options: this.options,
					key: 33,
					onChange: this._onSelectOption,
					value: this.selectedValues[33]
				}),
				v('p', {classes: [css.label]}, ['SS1. Indicate the type of wheelchair or scooter used.']),
				v('div',{style: 'margin: 0'},[
					w(Radio, {
						checked: this.sub_selectedRadioC === '1',
						value: '1',
						label: '1 - Manual',
						name: 'gender',
						onChange: this.sub_radioCChange
					}),
					w(Radio, {
						checked: this.sub_selectedRadioC === '2',
						value: '2',
						label: '2 - Motorized',
						name: 'gender',
						onChange: this.sub_radioCChange
					}),
				]),
			]),
        ]);
	}
}

export default GG0170;
