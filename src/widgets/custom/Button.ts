import { DNode } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import * as css from './styles/button.m.css';
import * as icons from './../styles/icons.m.css';

/**
 * @type ButtonProperties
 *
 * Properties that can be set on Button components
 */
export interface ButtonProperties {
	label: string;
	disabled?: boolean;
	icon?: string;
	raised?: boolean;
	primary?: boolean;
	colored?: boolean;
	onClick? (event: MouseEvent): void;
	type?: string;
}

@theme(css)
export class Button extends ThemedMixin(WidgetBase)<ButtonProperties> {
	private onClick(event: MouseEvent) {
		this.properties.onClick && this.properties.onClick(event);
	}
	protected render(): DNode | DNode[] {
		const {
			label,
			icon,
			disabled = false,
			raised = false,
			primary = false,
			colored = false,
			type = 'button'
		} = this.properties;

		const outerClasses = [
			css.root,
			raised ? css.raised : null,
			primary ? css.primary : null,
			disabled ? css.disabled : null,
			colored ? css.colored : null
		];
		return v('button', {
			disabled,
			classes: [...outerClasses],
			onclick: this.onClick,
			type
		}, [ label, icon ? v('i', { classes: [css.icon, icons.icon] }, [ icon ]) : null ]);
	}
}

export default Button;
