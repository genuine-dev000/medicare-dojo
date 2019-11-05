import { DNode, VNodeProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import TextInput from '@dojo/widgets/text-input';
import * as css from './styles/global.m.css';
import { Constructor } from '@dojo/framework/widget-core/interfaces';
import Checkbox from '@dojo/widgets/checkbox';
import Card from './Card';
/**

 * @type M0064
 *
 * Properties that can be set on M0064
 */
 export interface M0064Properties extends VNodeProperties{
 }

@theme(css)
export class M0064 extends ThemedMixin(WidgetBase)<M0064Properties> {
	private _state: any = {};
	private _checkboxChecked = false;
	private _checkboxChange() {
		this._checkboxChecked = !this._checkboxChecked;
		this.invalidate();
	}
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
		return v('div',{classes: [css.root]},[
			w(Card,{key: 'card-M0064'}, [
				v('h5',{classes: [css.black, css.code]},['M0064']),
				v('p', {classes: [css.label]}, ['Social Security Number']),
				this.createInput(TextInput, {
					type: 'number',
					key: 'security_number',
				}),
				w(Checkbox,{
					checked: this._checkboxChecked,
					label: 'UK – Unknown or Not Available',
					value: '',
					onChange: this._checkboxChange
				}),
			])
		]);
	}
}

export default M0064;
