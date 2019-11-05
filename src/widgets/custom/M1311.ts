import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import TextInput from '@dojo/widgets/text-input';
// import * as css from './styles/M1311.m.css';
import * as css from './styles/global.m.css';
import { Constructor } from '@dojo/framework/widget-core/interfaces';
import Card from './Card';
// import * as shadow from './styles/shadow.m.css';
/**import { global } from '@dojo/framework/shim/global';

 * @type M1311
 *
 * Properties that can be set on M1311
 */
 export interface M1311Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1311 extends ThemedMixin(WidgetBase)<M1311Properties> {
    private _state: any = {};
	private createInput<W extends WidgetBase>(
		
		Widget: Constructor<W>,
		props: W['properties'] & { key: string },
		options: { cbName: string, initialValue: string } = { cbName: 'onInput', initialValue: '' }
	) {
		const { cbName = 'onInput', initialValue = '' } = options;
		if (!this._state[props.key]) {
			this._state[props.key] = initialValue;
		}
		return w(Widget, {
			...(props as any),
			value: this._state[props.key],
			[cbName]: (value: string) => {
				this._state[props.key] = value;
				this.invalidate();
			}
		});
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M1311'}, [
            v('h5',{classes: [css.black, css.code]},['M1311']),
			v('p', {classes: [css.label]}, ['Current Number of Unhealed Pressure Ulcers/Injuries at Each Stage']),
			v('div',{style: 'padding-left:1em'},[
				v('p', {classes: [css.label]}, ['A1. Stage 2: Partial thickness loss of dermis presenting as a shallow open ulcer with a red or pink wound bed, without slough. May also present as an intact or open/ruptured blister. Number of Stage 2 pressure ulcers']),
				this.createInput(TextInput, {
					type: 'number',
					key: '1',
					placeholder: "Enter Number"
				}),
				v('p', {classes: [css.label]}, ['B1. Stage 3: Full thickness tissue loss. Subcutaneous fat may be visible but boe, tendon, or muscle is not exposed. Slough may be present but does not obscure the depth of tissue loss. May include undermining and tunneling Number of Stage 3 pressure ulcers']),
				this.createInput(TextInput, {
					type: 'number',
					key: '2',
					placeholder: "Enter Number"
				}),
				v('p', {classes: [css.label]}, ['C1. Stage 4: Full thickness tissue loss with exposed bone, tendon, or muscle. Slough or eschar may be present on some parts of the wound bed. Often includes undermining and tunneling. Number of Stage 4 pressure ulcers']),
				this.createInput(TextInput, {
					type: 'number',
					key: '3',
					placeholder: "Enter Number"
				}),
				v('p', {classes: [css.label]}, ['D1. Unstageable: Non-removable dressing/device: Known but not stageable due to non-removable dressing/device Number of unstageable pressure ulcers/injuries due to non-removable dressing/device']),
				this.createInput(TextInput, {
					type: 'number',
					key: '4',
					placeholder: "Enter Number"
				}),
				v('p', {classes: [css.label]}, ['E1. Unstageable: Slough and/or eschar: Known but not stageable due to coverage of wound bed by slough and/or eschar Number of unstageable pressure ulcers due to coverage of wound bed by slough and/or eschar']),
				this.createInput(TextInput, {
					type: 'number',
					key: '5',
					placeholder: "Enter Number"
				}),
				v('p', {classes: [css.label]}, ['F1. Unstageable: Deep tissue injury Number of unstageable pressure injuries presenting as deep tissue injury']),
				this.createInput(TextInput, {
					type: 'number',
					key: '6',
					placeholder: "Enter Number"
				})
			])

        ]);
	}
}

export default M1311;
