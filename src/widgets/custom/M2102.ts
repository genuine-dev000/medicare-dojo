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

 * @type M2102
 *
 * Properties that can be set on M2102
 */
const SelectClasses = {
	"@dojo/widgets/button": {
		root: [css.button]
	}
};
 export interface M2102Properties extends KeyedWidgetProperties{
 }

@theme(css)
export class M2102 extends ThemedMixin(WidgetBase)<M2102Properties> {
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
		return w(Card,{key: 'card-M2102'}, [
			v('h5',{classes: [css.black, css.code]},['M2102']),
			v('p', {classes: [css.label]}, ['Types and Sources of Assistance']),
			v('p', {classes: [css.label]}, ['Determine the ability and willingness of non-agency caregivers (such as family members, friends, or privately paid caregivers) to provide assistance for the following activities, if assistance is needed. Excludes all care by your agency staff.']),
			v('div', {style: 'margin-left:0em'},[
				v('p', {classes: [css.label]}, ['f. Supervision and safety (for example, due to cognitive impairment)']),
				w(Radio, {
					checked: this._selectedRadio === '1',
					value: '1',
					label: '0 - No assistance needed –patient is independent or does not have needs in this area',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '2',
					value: '2',
					label: '1 - Non-agency caregiver(s) currently provide assistance',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '3',
					value: '3',
					label: '2 - Non-agency caregiver(s) need training/ supportive services to provide assistance',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '4',
					value: '4',
					label: '3 - Non-agency caregiver(s) are not likely to provide assistance OR it is unclear if they will provide assistance.',
					name: 'gender',
					onChange: this._radioChange
				}),
				w(Radio, {
					checked: this._selectedRadio === '5',
					value: '5',
					label: '4 - Assistance needed, but no non-agency caregiver(s) available.',
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

export default M2102;
