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

 * @type M1306
 *
 * Properties that can be set on M1306
 */
const SelectClasses = {
	"@dojo/widgets/button": {
		root: [css.button]
	}
  };
 export interface M1306Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1306 extends ThemedMixin(WidgetBase)<M1306Properties> {
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
		return w(Card,{key: 'card-M1306'}, [
            v('h5',{classes: [css.black, css.code]},['M1306']),
			v('p', {classes: [css.label]}, ['Does this patient have at least one Unhealed Pressure Ulcer at Stage II or Higher or designated as "unstageable"? (Excludes Stage 1 pressure injuries and all healed pressure ulcers/injuries']),
			v('div', [
				w(Radio, {
					checked: this._selectedRadio === '1',
					value: '1',
					label: '0 - No [ Go to M1322 ]',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '2',
					value: '2',
					label: '1 - Yes',
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

export default M1306;
