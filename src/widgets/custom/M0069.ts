import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
import Card from './Card';
import Radio from '@dojo/widgets/radio';
/**

 * @type M0069
 *
 * Properties that can be set on M0069
 */
// const SelectClasses = {
// 	"@dojo/widgets/enhanced-text-input": {
// 		input: [css.input]
// 	}
//   };
 export interface M0069Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M0069 extends ThemedMixin(WidgetBase)<M0069Properties> {
	private _selectedRadio = 'male';
	private _radioChange(value: string) {
		this._selectedRadio = value;
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M0069'}, [
            v('h5',{classes: [css.black, css.code]},['M0069']),
			v('p', {classes: [css.label]}, ['Gender']),
			v('div', [
				w(Radio, {
					checked: this._selectedRadio === 'male',
					value: 'male',
					label: '1 - Male',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === 'female',
					value: 'female',
					label: '2 - Female',
					name: 'gender',
					onChange: this._radioChange
				}),
			])
        ]);
	}
}

export default M0069;
