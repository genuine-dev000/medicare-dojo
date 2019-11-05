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

 * @type M1830
 *
 * Properties that can be set on M1830
 */
const SelectClasses = {
	"@dojo/widgets/button": {
		root: [css.button]
	}
};
 export interface M1830Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1830 extends ThemedMixin(WidgetBase)<M1830Properties> {
	private _selectedRadio = '1';
	private sub_selectedRadio = '-1';
	private sub_radioChange(value: string) {
		this.sub_selectedRadio = value;
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
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M1830'}, [
			v('h5',{classes: [css.black, css.code]},['M1830']),
			v('p', {classes: [css.label]}, ['Bathing']),
			v('p', {classes: [css.label]}, ['Current ability to wash entire body safely. Excludes grooming (washing face, washing hands, and shampooing hair)']),
			v('div', {style: 'margin-left:0em'},[
				w(Radio, {
					checked: this._selectedRadio === '1',
					value: '1',
					label: '0 - Able to bathe self in shower or tub independently, including getting in and out of tub/shower.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '2',
					value: '2',
					label: '1 - With the use of devices, is able to bathe self in shower or tub independently, including getting in and out of the tub/shower.',
					name: 'gender',
					onChange: this._radioChange
				}),
				v('div',{},[
					w(Radio, {
						checked: this._selectedRadio === '3',
						value: '3',
						label: '2 - Able to bathe in shower or tub with the intermittent assistance of another person',
						name: 'gender',
						onChange: this._radioChange
					}),
					v('div',{style: 'margin: 0.5em 0em 0.5em 1.5em'},[
						w(Radio, {
							checked: this.sub_selectedRadio === '1',
							value: '1',
							label: '(a) for intermittent supervision or encouragement or reminders',
							name: 'gender',
							disabled: true,
							onChange: this.sub_radioChange
						}),
						w(Radio, {
							checked: this.sub_selectedRadio === '2',
							value: '2',
							label: '(b) to get in and out of the shower or tub',
							name: 'gender',
							disabled: true,
							onChange: this.sub_radioChange
						}),
						w(Radio, {
							checked: this.sub_selectedRadio === '3',
							value: '3',
							label: '(c) for washing difficult to reach areas.',
							name: 'gender',
							disabled: true,
							onChange: this.sub_radioChange
						}),
					])
				]),
				w(Radio, {
					checked: this._selectedRadio === '4',
					value: '4',
					label: '3 - Able to participate in bathing self in shower or tub, but requires presence of another person throughout the bath for assistance or supervision.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '5',
					value: '5',
					label: '4 - Unable to use the shower or tub, but able to bathe self independently with or without the use of devices at the sink, in chair, or on commode.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '6',
					value: '6',
					label: '5 - Unable to use the shower or tub, but able to participate in bathing self in bed, at the sink, in bedside chair, or on commode, with the assistance or supervision of another person throughout the bath.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '7',
					value: '7',
					label: '6 - Unable to participate effectively in bathing and is bathed totally by another person.',
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

export default M1830;
