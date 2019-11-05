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

 * @type M2001
 *
 * Properties that can be set on M2001
 */
const SelectClasses = {
	"@dojo/widgets/button": {
		root: [css.button]
	}
};
 export interface M2001Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M2001 extends ThemedMixin(WidgetBase)<M2001Properties> {
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
		return w(Card,{key: 'card-M2001'}, [
			v('h5',{classes: [css.black, css.code]},['M2001']),
			v('p', {classes: [css.label]}, ['Drug Regimen Review']),
			v('p', {classes: [css.label]}, ['Did a complete drug regimen review indicate potential clinically significant medication issues?']),
			v('div', {style: 'margin-left:0em'},[
				w(Radio, {
					checked: this._selectedRadio === '1',
					value: '1',
					label: 'No - No issues found during review [ Go to M2010 ]',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '2',
					value: '2',
					label: 'Yes - Issues found during review',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '3',
					value: '3',
					label: 'NA - Patient is not taking any medications [ Go to M2102 ]',
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

export default M2001;
