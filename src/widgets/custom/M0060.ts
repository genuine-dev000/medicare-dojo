import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import TextInput from '@dojo/widgets/text-input';
import * as css from './styles/global.m.css';
import { Constructor } from '@dojo/framework/widget-core/interfaces';
import Card from './Card';
/**

 * @type M0060
 *
 * Properties that can be set on M0060
 */
 export interface M0060Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M0060 extends ThemedMixin(WidgetBase)<M0060Properties> {
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
		return w(Card,{key: 'card-M0060'}, [
            v('h5',{classes: [css.black, css.code]},['M0060']),
            v('p', {classes: [css.label]}, ['Patient Zip Code']),
            this.createInput(TextInput, {
                type: 'text',
                key: 'zipcode',
                required: true,
            })
        ]);
	}
}

export default M0060;
