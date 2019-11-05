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

 * @type M1800
 *
 * Properties that can be set on M1800
 */
const SelectClasses = {
	"@dojo/widgets/button": {
		root: [css.button]
	}
};
 export interface M1800Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1800 extends ThemedMixin(WidgetBase)<M1800Properties> {
	private _selectedRadio = '1';
	private _radioChange(value: string) {
		this._selectedRadio = value;
		this.invalidate();
	}
	private onClearBtnClicked(){
		this._selectedRadio = '-1';
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M1800'}, [
			v('h5',{classes: [css.black, css.code]},['M1800']),
			v('p', {classes: [css.label]}, ['Grooming']),
			v('p', {classes: [css.label]}, ['Current ability to tend safely to personal hygiene needs (specifically: washing face and hands, hair care, shaving or make up, teeth or denture care, fingernail care)']),
			v('div', {style: 'margin-left:0em'},[
				w(Radio, {
					checked: this._selectedRadio === '1',
					value: '1',
					label: '0 - Able to groom self unaided, with or without the use of assistive devices or adapted methods.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '2',
					value: '2',
					label: '1 - Grooming utensils must be placed within reach before able to complete grooming activities.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '3',
					value: '3',
					label: '2 - Someone must assist the patient to groom self.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '4',
					value: '4',
					label: '3 - Patient depends entirely upon someone else for grooming needs.',
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

export default M1800;
