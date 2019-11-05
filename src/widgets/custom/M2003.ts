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

 * @type M2003
 *
 * Properties that can be set on M2003
 */
const SelectClasses = {
	"@dojo/widgets/button": {
		root: [css.button]
	}
};
 export interface M2003Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M2003 extends ThemedMixin(WidgetBase)<M2003Properties> {
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
		return w(Card,{key: 'card-M2003'}, [
			v('h5',{classes: [css.black, css.code]},['M2003']),
			v('p', {classes: [css.label]}, ['Medication Follow-up']),
			v('p', {classes: [css.label]}, ['Did the agency contact a physician (or physician-designee) by midnight of the next calendar day and complete prescribed/recommended actions in response to the identified potential clinically significant medication issues?']),
			v('div', {style: 'margin-left:0em'},[
				w(Radio, {
					checked: this._selectedRadio === '1',
					value: '1',
					label: '0 - No',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '2',
					value: '2',
					label: '1 - Yes',
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

export default M2003;
