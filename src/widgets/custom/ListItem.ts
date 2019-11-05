import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { ThemedMixin, theme, ThemedProperties } from '@dojo/framework/widget-core/mixins/Themed';
import { DNode } from '@dojo/framework/widget-core/interfaces';
import { v } from '@dojo/framework/widget-core/d';
import * as css from './styles/listItem.m.css';
import * as icons from '../styles/icons.m.css';

export interface ListItemProperties extends ThemedProperties {
	title: string;
	id: string;
	subtitle?: string;
	textBody?: string;
	icon?: string;
	leadIcon?: string;
	leadAvatar?: boolean;
	border?: boolean;
	onClick?(id: string): boolean | void;
	onIconClick?: (id: string) => void;
}

@theme(css)
export default class ListItem extends ThemedMixin(WidgetBase)<ListItemProperties> {
   // this.properties.onInput && this.properties.onInput(<any> event)
	private _onClick(event: MouseEvent) {
		const { id } = this.properties;
		console.log(id);
        // this.properties.onClick && this.properties.onClick(id);
        this.properties.onClick && this.properties.onClick(id)
	}

	private onIconClick(event: MouseEvent) {
		if (this.properties.onIconClick) {
			event.stopPropagation();
			const { id } = this.properties;
			this.properties.onIconClick(id);
		}
	}

	protected render(): DNode {
		const {
			title,
			subtitle = '',
			textBody = '',
			icon = '',
			leadIcon = '',
			leadAvatar = true,
			border = true,
			extraClasses,
			onIconClick
		} = this.properties;

		let lineClass = null;
		let bodyNode = null;

		if (subtitle) {
			lineClass = css.twoLine;
			bodyNode = v('span', { classes: [css.subtitle] }, [ subtitle ]);
		}
		else if (textBody) {
			lineClass = css.threeLine;
			bodyNode = v('span', { classes: [css.textBody] }, [ textBody ]);
		}

		return v('li', { classes: [css.root, lineClass, border ? css.border : null, extraClasses ? extraClasses.root : null], onclick: this._onClick }, [
			v('span', { classes: [css.primaryContent] }, [
				leadIcon ? v('i', { classes: [extraClasses ? extraClasses.leadIcon : null, css.leadIcon, leadAvatar ? css.avatar : null, icons.icon] }, [ leadIcon ]) : null,
				v('span', [ title ]),
				bodyNode
			]),
			icon ? v('span', { classes: [css.secondaryContent] }, [
				v('a', { classes: [css.secondaryAction, onIconClick ? css.clickable : null], onclick: this.onIconClick }, [
					v('i', { classes: [extraClasses ? extraClasses.icon : null, css.icon, icons.icon] }, [ icon ])
				])
			]) : null
		]);
	}
}
