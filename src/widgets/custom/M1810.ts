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

 * @type M1810
 *
 * Properties that can be set on M1810
 */
const SelectClasses = {
	"@dojo/widgets/button": {
		root: [css.button]
	}
};
 export interface M1810Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1810 extends ThemedMixin(WidgetBase)<M1810Properties> {
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
		return w(Card,{key: 'card-M1810'}, [
			v('h5',{classes: [css.black, css.code]},['M1810']),
			v('p', {classes: [css.label]}, ['Ability to Dress Upper Body']),
			v('p', {classes: [css.label]}, ['Curent Ability to Dress Upper Body safely including undergarments, pullovers, front-opening shirts and blouses, managing zippers, buttons, and snaps']),
			v('div', {style: 'margin-left:0em'},[
				w(Radio, {
					checked: this._selectedRadio === '1',
					value: '1',
					label: '0 - Able to get clothes out of closets and drawers, put them on and remove them from the upper body without assistance.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '2',
					value: '2',
					label: '1 - Able to dress upper body without assistance if clothing is laid out or handed to the patient.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '3',
					value: '3',
					label: '2 - Someone must help the patient put on upper body clothing.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '4',
					value: '4',
					label: '3 - Patient depends entirely upon another person to dress the upper body.',
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

export default M1810;
