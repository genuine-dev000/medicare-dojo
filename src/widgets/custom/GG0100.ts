import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
import Card from './Card';
import Select from '@dojo/widgets/select';
/**

 * @type GG0100
 *
 * Properties that can be set on GG0100
 */

 export interface GG0100Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class GG0100 extends ThemedMixin(WidgetBase)<GG0100Properties> {
	private options = ['3. Independent ','2. Needed Some Help', '1. Dependent', '8.UnKnown', '9.Not Applicable'];
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
		return w(Card,{key: 'card-GG0100'}, [
			v('h5',{classes: [css.black, css.code]},['GG0100']),
			v('p', {classes: [css.label]}, [' Prior Functioning: Everyday Activities: Indicate the Patient\'s usual with everyday activities prior to the current illness, exacerbation, or injury']),
			v('p', {style:'font-weight:600', classes: [css.margin_bottom_small, css.label]}, ['Coding:']),
			v('div',{style: 'margin-left:0.8em'},[
				v('p', {classes: [css.margin_top_small, css.label]}, ['3. Independent - Patient completed the actiities by him/herself, with or without an assistive device, with no assistance from a helper']),
				v('p', {classes: [css.margin_top_small, css.label]}, ['2. Needed Some Help - Patient needed partial assistance from another person to complete activities.']),
				v('p', {classes: [css.margin_top_small, css.label]}, ['8.UnKnown']),
				v('p', {classes: [css.margin_top_small, css.label]}, ['9.Not Applicable']),
			]),
			v('p', {style:'font-weight:600', classes: [css.margin_bottom_small, css.label]}, ['Enter the Codes in Boxes']),
			v('div',{style: 'margin-left:0.8em'},[
				v('p', {classes: [css.margin_top_small, css.label]}, ['A. Self Care: Code the patient\'s need for assistance with bathing, dressing, using the toilet, or eating prior to the current illness, exacerbation, or injury.']),
				w(Select,{
					options: this.options,
					key: 0,
					onChange: this._onSelectOption,
					value: this.selectedValues[0]
				}),
				v('p', {classes: [css.label]}, ['B. Indoor Mobility (Ambulation: Code the patient\'s need for assistance with walking from room to room (with or without a device such as cane, crutch or walker) prior to the current illness, exacerbation, or injury.']),
				w(Select,{
					options: this.options,
					key: 1,
					onChange: this._onSelectOption,
					value: this.selectedValues[1]
				}),
				v('p', {classes: [css.label]}, ['C. Stairs: Code the patient\'s need for assistance with internal or external stairs (with or without a device such as cane, crutch, or walker) prior to the curent illness, exacerbation or injury.']),
				w(Select,{
					options: this.options,
					key: 2,
					onChange: this._onSelectOption,
					value: this.selectedValues[2]
				}),
				v('p', {classes: [css.label]}, ['D. Functional Cognition: Code the patient\'s need for assistance with planning regular taks, such as shopping or remembering to take medication prior to the current illness, exacerbation, or injury.']),
				w(Select,{
					options: this.options,
					key: 3,
					onChange: this._onSelectOption,
					value: this.selectedValues[3]
				}),
			]),
        ]);
	}
}

export default GG0100;
