import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
import Card from './Card';
import DatePicker from './DatePicker';
/**

 * @type M0030
 *
 * Properties that can be set on M0030
 */
// const SelectClasses = {
// 	"@dojo/widgets/enhanced-text-input": {
// 		input: [css.input]
// 	}
//   };
 export interface M0030Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M0030 extends ThemedMixin(WidgetBase)<M0030Properties> {
	// private _state: any = {};
	// private _month: number | undefined;
	// private _year: number | undefined;
	// private _selectedDate: Date | undefined;
	// private createInput<W extends WidgetBase>(
		
	// 	Widget: Constructor<W>,
	// 	props: W['properties'] & { key: string },
	// 	options: { cbName: string, initialValue: string } = { cbName: 'onInput', initialValue: '' }
	// ) {
	// 	const { cbName = 'onInput', initialValue = '' } = options;
	// 	if (!this._state[props.key]) {
	// 		this._state[props.key] = initialValue;
	// 	}
	// 	return w(Widget, {
	// 		...(props as any),
	// 		value: this._state[props.key],
	// 		[cbName]: (value: string) => {
	// 			this._state[props.key] = value;
	// 			this.invalidate();
	// 		}
	// 	});
	// }
	protected render(): DNode | DNode[] {

		return w(Card,{key: 'card-M0030'}, [
            v('h5',{classes: [css.black, css.code]},['M0030']),
            v('p', {classes: [css.label]}, ['Start of Care Date']),
			w(DatePicker,{selectedDate: new Date()})

        ]);
	}
}

export default M0030;
