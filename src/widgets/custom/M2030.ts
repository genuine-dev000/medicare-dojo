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

 * @type M2030
 *
 * Properties that can be set on M2030
 */
const SelectClasses = {
	"@dojo/widgets/button": {
		root: [css.button]
	}
};
 export interface M2030Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M2030 extends ThemedMixin(WidgetBase)<M2030Properties> {
	private _selectedRadio = '1';
	private sub_selectedRadio = '-1';
	private isSubOptionDisabled = true;
	private sub_radioChange(value: string) {
		this.sub_selectedRadio = value;
		this.invalidate();
	}
	private _radioChange(value: string) {
		this._selectedRadio = value;
		if (this._selectedRadio === '2')
			this.isSubOptionDisabled = false;
		else{
			this.isSubOptionDisabled = true;
			this.sub_selectedRadio = '-1';
		}
		this.invalidate();
	}
	private onClearBtnClicked(){
		this._selectedRadio = '-1';
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M2030'}, [
			v('h5',{classes: [css.black, css.code]},['M2030']),
			v('p', {classes: [css.label]}, ['Management of Injectable Medications']),
			v('p', {classes: [css.label]}, ['Patient\'s current ability to prepare and take all prescribed injectable medications reliably and safely, including administration of correct dosage at the appropriate times/intervals. Excludes IV medications.']),
			v('div', {style: 'margin-left:0em'},[
				w(Radio, {
					checked: this._selectedRadio === '1',
					value: '1',
					label: '0 - Able to independently take the correct medication(s) and proper dosage(s) at the correct times.',
					name: 'gender',
					onChange: this._radioChange
				}),
				v('div',{},[
					w(Radio, {
						checked: this._selectedRadio === '2',
						value: '2',
						label: '1 - Able to take injectable medication(s) at the correct times if:',
						name: 'gender',
						onChange: this._radioChange
					}),
					v('div',{style: 'margin: 0.5em 0em 0.5em 1.5em'},[
						w(Radio, {
							checked: this.sub_selectedRadio === '1',
							value: '1',
							label: '(a) individual syringes are prepared in advance by another person',
							name: 'gender',
							disabled: this.isSubOptionDisabled,
							onChange: this.sub_radioChange
						}),
						w(Radio, {
							checked: this.sub_selectedRadio === '2',
							value: '2',
							label: '(b) another person develops a drug diary or chart',
							name: 'gender',
							disabled: this.isSubOptionDisabled,
							onChange: this.sub_radioChange
						}),
					])
				]),
				w(Radio, {
					checked: this._selectedRadio === '3',
					value: '3',
					label: '2 - Able to take medication(s) at the correct times if given reminders by another person based on the frequency of the injection',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '4',
					value: '4',
					label: '3 - Unable to take injectable medication unless administered by another person.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '5',
					value: '5',
					label: 'NA - No injectable medications prescribed.',
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

export default M2030;
