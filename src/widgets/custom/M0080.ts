import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
import Card from './Card';
import Radio from '@dojo/widgets/radio';
/**

 * @type M0080
 *
 * Properties that can be set on M0080
 */
// const SelectClasses = {
// 	"@dojo/widgets/enhanced-text-input": {
// 		input: [css.input]
// 	}
//   };
 export interface M0080Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M0080 extends ThemedMixin(WidgetBase)<M0080Properties> {
	private _selectedRadio = '1';
	private _radioChange(value: string) {
		this._selectedRadio = value;
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M0080'}, [
            v('h5',{classes: [css.black, css.code]},['M0080']),
			v('p', {classes: [css.label]}, ['Discipline of Person Completing Assessment']),
			v('div', [
				w(Radio, {
					checked: this._selectedRadio === '1',
					value: '1',
					label: '1-RN',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '2',
					value: '2',
					label: '2-PT',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '3',
					value: '3',
					label: '3-SLP/ST',
					name: 'gender',
					onChange: this._radioChange
				}),,
				w(Radio, {
					checked: this._selectedRadio === '4',
					value: '4',
					label: '4-OT',
					name: 'gender',
					onChange: this._radioChange
				}),
			])
        ]);
	}
}

export default M0080;
