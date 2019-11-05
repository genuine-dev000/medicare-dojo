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

 * @type M1870
 *
 * Properties that can be set on M1870
 */
const SelectClasses = {
	"@dojo/widgets/button": {
		root: [css.button]
	}
};
 export interface M1870Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1870 extends ThemedMixin(WidgetBase)<M1870Properties> {
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
		return w(Card,{key: 'card-M1870'}, [
			v('h5',{classes: [css.black, css.code]},['M1870']),
			v('p', {classes: [css.label]}, ['Feeding or Eating']),
			v('p', {classes: [css.label]}, ['Current ability to feed self meals and snacks safely. Note: This refers only to the process of eating, chewing, and swallowing, not preparing the food to be eaten.']),
			v('div', {style: 'margin-left:0em'},[
				w(Radio, {
					checked: this._selectedRadio === '1',
					value: '1',
					label: '0 - Able to independently feed self.',
					name: 'gender',
					onChange: this._radioChange
				}),
				v('div',{},[
					w(Radio, {
						checked: this._selectedRadio === '2',
						value: '2',
						label: '1 - Able to feed self independently but requires',
						name: 'gender',
						onChange: this._radioChange
					}),
					v('div',{style: 'margin: 0.5em 0em 0.5em 1.5em'},[
						w(Radio, {
							checked: this.sub_selectedRadio === '1',
							value: '1',
							label: '(a) meal set-up',
							name: 'gender',
							disabled: true,
							onChange: this.sub_radioChange
						}),
						w(Radio, {
							checked: this.sub_selectedRadio === '2',
							value: '2',
							label: '(b) intermittent assistance or supervision from another person',
							name: 'gender',
							disabled: true,
							onChange: this.sub_radioChange
						}),
						w(Radio, {
							checked: this.sub_selectedRadio === '3',
							value: '3',
							label: '(c) a liquid, pureed or ground meat diet',
							name: 'gender',
							disabled: true,
							onChange: this.sub_radioChange
						}),
					])
				]),

				w(Radio, {
					checked: this._selectedRadio === '3',
					value: '3',
					label: '2 - Unable to feed self and must be assisted or supervised throughout the meal/snack.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '4',
					value: '4',
					label: '3 - Able to take in nutrients orally and receives supplemental nutrients through a nasogastric tube or gastrostomy.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '5',
					value: '5',
					label: '4 - Unable to take in nutrients orally and is fed nutrients through a nasogastric tube or gastrostomy.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '6',
					value: '6',
					label: '5 - Unable to take in nutrients orally or by tube feeding.',
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

export default M1870;
