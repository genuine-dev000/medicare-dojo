import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
import Card from './Card';
import Radio from '@dojo/widgets/radio';
/**

 * @type M0110
 *
 * Properties that can be set on M0110
 */
// const SelectClasses = {
// 	"@dojo/widgets/radio": {
// 		label: [css.label],
// 		root: [css.margin_small],
// 	}
//   };
 export interface M0110Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M0110 extends ThemedMixin(WidgetBase)<M0110Properties> {
	private _selectedRadio = '1';
	private _radioChange(value: string) {
		this._selectedRadio = value;
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M0110'}, [
            v('h5',{classes: [css.black, css.code]},['M0110']),
			v('p', {classes: [css.label]}, ['Episode Timing']),
			v('p', {classes: [css.label]}, ['Is the Medicare home health payment episode for which this assessment will define a case mix group an "early" episode or a "later" episode in the patient\'s current sequence of adjacent Medicare home health payment episodes?']),
			v('div', [
				w(Radio, {
					checked: this._selectedRadio === '1',
					value: '1',
					label: '1 - Early',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '2',
					value: '2',
					label: '2 - Later',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '3',
					value: '3',
					label: 'UK - Unknown',
					name: 'gender',
					onChange: this._radioChange
				}),,
				w(Radio, {
					// classes: SelectClasses,
					checked: this._selectedRadio === '4',
					value: '4',
					label: 'NA - Not Applicable: No Medicare case mix group to be defined by this assessment.',
					name: 'gender',
					onChange: this._radioChange
				}),
			])
        ]);
	}
}

export default M0110;
