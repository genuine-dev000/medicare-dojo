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

 * @type M1745
 *
 * Properties that can be set on M1745
 */
const SelectClasses = {
	"@dojo/widgets/button": {
		root: [css.button]
	}
};
 export interface M1745Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1745 extends ThemedMixin(WidgetBase)<M1745Properties> {
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
		return w(Card,{key: 'card-M1745'}, [
			v('h5',{classes: [css.black, css.code]},['M1745']),
			v('p', {classes: [css.label]}, ['Frequency of Disruptive Behavior Symptoms : (Reported or Observed)']),
			v('p', {classes: [css.label]}, ['Any physical, verbal, or other disruptive/dangerous symptoms that are injurious to self or others or jeopardize personal safety.']),
			v('div', {style: 'margin-left:0em'},[
				w(Radio, {
					checked: this._selectedRadio === '1',
					value: '1',
					label: '0 - Never',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '2',
					value: '2',
					label: '1 - Less than once a month',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '3',
					value: '3',
					label: '2 - Once a month',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '4',
					value: '4',
					label: '3 - Several times each month',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '5',
					value: '5',
					label: '4 - Several times a week',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '6',
					value: '6',
					label: '5 - At least daily',
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

export default M1745;
