import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
import Card from './Card';
import TextInput from '@dojo/widgets/text-input';
import Checkbox from '@dojo/widgets/checkbox';
/**

 * @type M2200
 *
 * Properties that can be set on M2200
 */

 export interface M2200Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M2200 extends ThemedMixin(WidgetBase)<M2200Properties> {
	private _therapy: string = '000';
	private _check: boolean = false;
	private _onInput(value: string){
		this._therapy = value;
		this.invalidate();
	}
	private _onCheckboxClicked(value: string, check: boolean){
		this._check = check;
		this.invalidate();
		console.log(check);
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M2200'}, [
			v('h5',{classes: [css.black, css.code]},['M2200']),
			v('p', {classes: [css.label]}, ['Therapy Need']),
			v('p', {classes: [css.label]}, ['In the home health plan of care for the Medicare payment episode for which this assessment will define a case mix group, what is the indicated need for therapy visits (total of reasonable and necessary physical, occupational, and speech-language pathology visits combined)?']),
			v('p', {classes: [css.label]}, ['(Enter zero [ "000" ] if no therapy visits indicated.)']),
			w(TextInput,{
				type: 'number',
				value: this._therapy,
				onInput: this._onInput
			}),
			v('p', {classes: [css.label]}, ['Number of therapy visits indicated (total of physical, occupational and speech-language pathology combined).']),
			w(Checkbox,{
				onClick: this._onCheckboxClicked,
				checked: this._check,
				label: 'NA - Not Applicable: No case mix group defined by this assessment.'
			})
        ]);
	}
}

export default M2200;
