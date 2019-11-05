import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
import Card from './Card';
import Checkbox from '@dojo/widgets/checkbox';
/**

 * @type M0140
 *
 * Properties that can be set on M0140
 */
// const SelectClasses = {
// 	"@dojo/widgets/enhanced-text-input": {
// 		input: [css.input]
// 	}
//   };
 export interface M0140Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M0140 extends ThemedMixin(WidgetBase)<M0140Properties> {
	private is_american_indian_alaska_native = false;
	private is_asian = false;
	private is_black_african_american = false;
	private is_hispanic_latino = false;
	private is_native_hawailian_pacific_islander = false;
	private is_white = true;

	private _checkboxChange(idx: string) {
		switch (idx){
			case '1':
				this.is_american_indian_alaska_native = !this.is_american_indian_alaska_native;
				break;
			case '2':
				this.is_asian = !this.is_asian;
				break;
			case '3':
				this.is_black_african_american = !this.is_black_african_american;
				break;
			case '4':
				this.is_hispanic_latino = !this.is_hispanic_latino;
				break;
			case '5':
				this.is_native_hawailian_pacific_islander = !this.is_native_hawailian_pacific_islander;
				break;
			case '6':
				this.is_white = !this.is_white;
				break;
		}
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M0140'}, [
            v('h5',{classes: [css.black, css.code]},['M0140']),
			v('p', {classes: [css.label]}, ['Race/Ethnicity ( Mark all that apply )']),
			v('div', [
				w(Checkbox, {
					checked: this.is_american_indian_alaska_native,
					label: '1 - American Indian or Alaska Native',
					value: '1',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_asian,
					label: '2 - Asian',
					value: '2',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_black_african_american,
					label: '3 - Black or African-American',
					value: '3',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_hispanic_latino,
					label: '4 - Hispanic or Latino',
					value: '4',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_native_hawailian_pacific_islander,
					label: '5 - Native Hawaiian or Pacific Islander',
					value: '5',
					onChange: this._checkboxChange
				}),
				w(Checkbox, {
					checked: this.is_white,
					label: '6 - White',
					value: '6',
					onChange: this._checkboxChange
				})
			])
        ]);
	}
}

export default M0140;
