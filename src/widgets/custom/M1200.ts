import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
import Card from './Card';
import Radio from '@dojo/widgets/radio';
import Button from '@dojo/widgets/button';
/**

 * @type M1200
 *
 * Properties that can be set on M1200
 */
const SelectClasses = {
	"@dojo/widgets/button": {
		root: [css.button]
	}
  };
 export interface M1200Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1200 extends ThemedMixin(WidgetBase)<M1200Properties> {
	private _selectedRadio = '1';
	private _radioChange(value: string) {
		this._selectedRadio = value;
		this.invalidate();
	}
	private onClearBtnClicked(){
		this._selectedRadio = '-1';
		this.invalidate();
	}
	protected render(): DNode | DNode[] {
		return w(Card,{key: 'card-M1200'}, [
            v('h5',{classes: [css.black, css.code]},['M1200']),
			v('p', {classes: [css.label]}, ['Vision (with corrective lenses if the patient usually wears them)']),
			v('div', [
				w(Radio, {
					checked: this._selectedRadio === '1',
					value: '1',
					label: '0 - Normal vision: sees adequately in most situations; can see medication labels, newsprint.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '2',
					value: '2',
					label: '1 - Partially impaired: cannot see medication labels or newsprint, but can see obstacles in path, and the surroundinglayout; can count fingers at arm\'s length.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '3',
					value: '3',
					label: '2 - Severely impaired: cannot locate objects without hearing or touching them or patient nonresponsive.',
					name: 'gender',
					onChange: this._radioChange
				}),
				v('div',{style: 'text-align:center;margin: 1em 0 0.5em 0'},[
					w(Button,{
						classes: SelectClasses,
						onClick: this.onClearBtnClicked
					},
					['Clear'])
				])
			])
        ]);
	}
}

export default M1200;
