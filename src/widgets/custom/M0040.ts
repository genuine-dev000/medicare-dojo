import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import TextInput from '@dojo/widgets/text-input';
import * as css from './styles/global.m.css';
import { Constructor } from '@dojo/framework/widget-core/interfaces';
import Card from './Card';
/**

 * @type M0040
 *
 * Properties that can be set on M0040
 */
 export interface M0040Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M0040 extends ThemedMixin(WidgetBase)<M0040Properties> {
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
		return w(Card,{key: 'card-M0040'}, [
            v('h5',{classes: [css.black, css.code]},['M0040']),
            v('p', {classes: [css.label]}, ['Patient Name']),
            this.createInput(TextInput, {
                type: 'text',
                key: 'firstname',
                required: true,
                placeholder: 'First Name'
            }),
            this.createInput(TextInput, {
                type: 'text',
                key: 'middlename',
                required: false,
                placeholder: 'Middle Name'
            }),
            this.createInput(TextInput, {
                type: 'text',
                key: 'lastname',
                required: true,
                placeholder: 'Last Name'
            }),
            this.createInput(TextInput, {
                type: 'text',
                key: 'suffixname',
                required: false,
                placeholder: 'Suffix Name'
            })
        ]);
	}
}

export default M0040;
