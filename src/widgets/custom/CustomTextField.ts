import { v4 } from 'uuid';
import { DNode, KeyedWidgetProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import * as css from './styles/CustomTextTield.m.css';
/**
 * @type CustomTextFieldProperties
 *
 * Properties that can be set on CustomTextField components
 */
export interface CustomTextFieldProperties extends KeyedWidgetProperties{ 
	label: string;
	floatingLabel?: boolean;
	type?: string;
	disabled?: boolean;
	invalid?: boolean;
	onInput?(ev?: Event): boolean | void;
	value?: string;
	readonly?: boolean;
	required?: boolean;
	min?: string;
	max?: string;
	widthHalf?: boolean,
	inside?: boolean,
	inlineLabel?: string
}

@theme(css)
export class CustomTextField extends ThemedMixin(WidgetBase)<CustomTextFieldProperties> {

	private _fieldId = v4();

	private _onInput(event: Event) {
		this.properties.onInput && this.properties.onInput(<any> event)
	}
	protected render(): DNode | DNode[] {
		const {
			label,
			floatingLabel = true,
			type = 'text',
			disabled = false,
			value = '',
			invalid = false,
			readonly = false,
			required = false,
			min,
			widthHalf = false,
			max,
			inside = false,
			inlineLabel = '',
		} = this.properties;

		const outerClasses = [
			css.root,
			widthHalf ? css.widthHalf :css.fullWidth,
			inside ? css.insideWidget : null,
			type === 'time' ? css.time : null,
			type === 'date' ? css.date : null,
			disabled ? css.disabled : null,
			readonly ? css.readonly : null,
			value ? css.dirty : null,
			invalid ? css.invalid : null
		];
		return v('div', { classes: [...outerClasses] }, [
			inside ? v('span',{},[inlineLabel]) : '',
			v('input', { classes: [inside ? css.no_margin && css.displayInlineBlock: null, css.input, widthHalf ? css.no_padding : css.with_padding], max, min, type, disabled, required, readonly: readonly ? 'readonly' : false, id: this._fieldId, oninput: this._onInput, value }),
			v('label', { classes: [css.label, floatingLabel ? css.floating : null], for: this._fieldId }, [ label ])
		]);
	}
}

export default CustomTextField;
