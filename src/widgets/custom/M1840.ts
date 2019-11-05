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

 * @type M1840
 *
 * Properties that can be set on M1840
 */
const SelectClasses = {
	"@dojo/widgets/button": {
		root: [css.button]
	}
};
 export interface M1840Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1840 extends ThemedMixin(WidgetBase)<M1840Properties> {
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
		return w(Card,{key: 'card-M1840'}, [
			v('h5',{classes: [css.black, css.code]},['M1840']),
			v('p', {classes: [css.label]}, ['Toilet Transferring']),
			v('p', {classes: [css.label]}, ['Current ability to get to and from the toilet or bedside commode safely and transfer on and off toilet/commode.']),
			v('div', {style: 'margin-left:0em'},[
				w(Radio, {
					checked: this._selectedRadio === '1',
					value: '1',
					label: '0 - Able to get to and from the toilet and transfer independently with or without a device.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '2',
					value: '2',
					label: '1 - When reminded, assisted, or supervised by another person, able to get to and from the toilet and transfer.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '3',
					value: '3',
					label: '2 - Unable to get to and from the toilet but is able to use a bedside commode (with or without assistance).',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '4',
					value: '4',
					label: '3 - Unable to get to and from the toilet or bedside commode but is able to use a bedpan/urinal independently.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '5',
					value: '5',
					label: '4 - Is totally dependent in toileting.',
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

export default M1840;
