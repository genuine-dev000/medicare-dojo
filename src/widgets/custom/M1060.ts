import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import TextInput from '@dojo/widgets/text-input';
import * as css from './styles/global.m.css';
import { Constructor } from '@dojo/framework/widget-core/interfaces';
import Card from './Card';
/**

 * @type M1060
 *
 * Properties that can be set on M1060
 */
 export interface M1060Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1060 extends ThemedMixin(WidgetBase)<M1060Properties> {
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
		return w(Card,{key: 'card-M1060'}, [
            v('h5',{classes: [css.black, css.code]},['M1060']),
			v('p', {classes: [css.label]}, ['Height and Weight']),
			v('p', {classes: [css.label]}, ['While measuring, if the number is X.1 – .4 round down; X.5 or greater round up']),
			v('p', {classes: [css.label]}, ['a. Height (in inches). Record most recent height measure since the most recent SOC/ROC']),
            this.createInput(TextInput, {
                type: 'number',
                key: 'height',
			}),
			v('p', {classes: [css.label]}, ['Weight (in pounds). Base weight on most recent measure in last 30 days; measure weight consistently, according to standard agency practice (for example, in a.m. after voiding, before meal, with shoes off, etc.)']),
            this.createInput(TextInput, {
                type: 'number',
                key: 'weight',
            })
        ]);
	}
}

export default M1060;
