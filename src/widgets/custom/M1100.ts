import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
import Card from './Card';
import Radio from '@dojo/widgets/radio';
/**

 * @type M1100
 *
 * Properties that can be set on M1100
 */
// const SelectClasses = {
// 	"@dojo/widgets/enhanced-text-input": {
// 		input: [css.input]
// 	}
//   };
 export interface M1100Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1100 extends ThemedMixin(WidgetBase)<M1100Properties> {
	private a_selectedRadio = '1';
	private b_selectedRadio = '1';
	private c_selectedRadio = '1';
	private a_radioChange(value: string) {
		this.a_selectedRadio = value;
		this.invalidate();
	}
	private b_radioChange(value: string) {
		this.b_selectedRadio = value;
		this.invalidate();
	}
	private c_radioChange(value: string) {
		this.c_selectedRadio = value;
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M1100'}, [
            v('h5',{classes: [css.black, css.code]},['M1100']),
			v('p', {classes: [css.label]}, ['Patient Living Situation']),
			v('p', {classes: [css.label]}, ['Which of the following best describes the patient\'s residential circumstance and availability of assistance? (Check one box only.)']),
			v('div', [
				v('div',{},[
					v('p', {classes: [css.label]}, ['a. Patient lives alone']),
					v('p', {style: 'margin-left:1.1em;margin-bottom:0.3em', classes: [css.label,css.margin_bottom_small]}, ['Availability of Assistance']),
					v('div',{style: 'padding:0em 1.1em'},[
						w(Radio, {
							checked: this.a_selectedRadio === '1',
							value: '1',
							label: 'Around the Clock',
							name: 'gender',
							onChange: this.a_radioChange
						}),
						w(Radio, {
							checked: this.a_selectedRadio === '2',
							value: '2',
							label: 'Regular daytime',
							name: 'gender',
							onChange: this.a_radioChange
						}),
						w(Radio, {
							checked: this.a_selectedRadio === '3',
							value: '3',
							label: 'Regular nighttime',
							name: 'gender',
							onChange: this.a_radioChange
						}),,
						w(Radio, {
							checked: this.a_selectedRadio === '4',
							value: '4',
							label: 'Occasional/short-term assistance',
							name: 'gender',
							onChange: this.a_radioChange
						}),
						w(Radio, {
							checked: this.a_selectedRadio === '5',
							value: '5',
							label: 'No assistance available',
							name: 'gender',
							onChange: this.a_radioChange
						}),
					]),
				]),
			]),
			v('div', [
				v('div',{},[
					v('p', {classes: [css.label]}, ['b. Patient lives with other person(s) in the home']),
					v('p', {style: 'margin-left:1.1em;margin-bottom:0.3em', classes: [css.label,css.margin_bottom_small]}, ['Availability of Assistance']),
					v('div',{style: 'padding:0em 1.1em'},[
						w(Radio, {
							checked: this.b_selectedRadio === '1',
							value: '1',
							label: 'Around the Clock',
							name: 'gender',
							onChange: this.b_radioChange
						}),
						w(Radio, {
							checked: this.b_selectedRadio === '2',
							value: '2',
							label: 'Regular daytime',
							name: 'gender',
							onChange: this.b_radioChange
						}),
						w(Radio, {
							checked: this.b_selectedRadio === '3',
							value: '3',
							label: 'Regular nighttime',
							name: 'gender',
							onChange: this.b_radioChange
						}),,
						w(Radio, {
							checked: this.b_selectedRadio === '4',
							value: '4',
							label: 'Occasional/short-term assistance',
							name: 'gender',
							onChange: this.b_radioChange
						}),
						w(Radio, {
							checked: this.b_selectedRadio === '5',
							value: '5',
							label: 'No assistance available',
							name: 'gender',
							onChange: this.b_radioChange
						}),
					]),
				]),
			]),
			v('div', [
				v('div',{},[
					v('p', {classes: [css.label]}, ['c. Patient lives in congregate situation (e.g., assisted living)']),
					v('p', {style: 'margin-left:1.1em;margin-bottom:0.3em', classes: [css.label,css.margin_bottom_small]}, ['Availability of Assistance']),
					v('div',{style: 'padding:0em 1.1em'},[
						w(Radio, {
							checked: this.c_selectedRadio === '1',
							value: '1',
							label: 'Around the Clock',
							name: 'gender',
							onChange: this.c_radioChange
						}),
						w(Radio, {
							checked: this.c_selectedRadio === '2',
							value: '2',
							label: 'Regular daytime',
							name: 'gender',
							onChange: this.c_radioChange
						}),
						w(Radio, {
							checked: this.c_selectedRadio === '3',
							value: '3',
							label: 'Regular nighttime',
							name: 'gender',
							onChange: this.c_radioChange
						}),,
						w(Radio, {
							checked: this.c_selectedRadio === '4',
							value: '4',
							label: 'Occasional/short-term assistance',
							name: 'gender',
							onChange: this.c_radioChange
						}),
						w(Radio, {
							checked: this.c_selectedRadio === '5',
							value: '5',
							label: 'No assistance available',
							name: 'gender',
							onChange: this.c_radioChange
						}),
					]),
				]),
			])
        ]);
	}
}

export default M1100;
