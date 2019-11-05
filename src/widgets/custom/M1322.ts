import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/global.m.css';
// import { Constructor } from '@dojo/framework/widget-core/interfaces';
import Card from './Card';
import Radio from '@dojo/widgets/radio';
import Button from '@dojo/widgets/button';
import * as style from './styles/M1021_1023.m.css';

/**

 * @type M1322
 *
 * Properties that can be set on M1322
 */
const SelectClasses = {
	"@dojo/widgets/button": {
		root: [css.button]
	}
};
const HalfWidthClass = {
	"@dojo/widgets/radio": {
		root: [style.root],
		label: [style.label]
	}
};
 export interface M1322Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M1322 extends ThemedMixin(WidgetBase)<M1322Properties> {
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
		return w(Card,{key: 'card-M1322'}, [
			v('h5',{classes: [css.black, css.code]},['M1322']),
			v('p', {classes: [css.label]}, ['Current Number of Stage I Pressure Ulcers']),
			v('p', {classes: [css.label]}, ['Intact skin with non-blanchable redness of a localized area usually over a bony prominence. Darkly pigmented skin may not have visible blanching; in dark skin tones only it may appear with persistent blue or purple hues.']),
			v('div', {style: 'text-align:center'},[
				w(Radio, {
					classes: HalfWidthClass,
					checked: this._selectedRadio === '1',
					value: '1',
					label: ' 0 ',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					classes: HalfWidthClass,
					checked: this._selectedRadio === '2',
					value: '2',
					label: ' 1 ',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					classes: HalfWidthClass,
					checked: this._selectedRadio === '3',
					value: '3',
					label: ' 3 ',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					classes: HalfWidthClass,
					checked: this._selectedRadio === '4',
					value: '4',
					label: ' 4 or more',
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

export default M1322;
