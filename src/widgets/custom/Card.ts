import { DNode } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme, ThemedProperties } from '@dojo/framework/widget-core/mixins/Themed';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';

import * as css from './styles/Card.m.css';
import * as shadow from './styles/shadow.m.css';
/**
 * @type CardProperties
 *
 * Properties that can be set on Card components
 */
export interface CardProperties extends ThemedProperties{
	title?: DNode;
	subtitle?: string;
	paddedContent?: boolean;
}

@theme(css)
export class Card extends ThemedMixin(WidgetBase)<CardProperties> {

	protected render(): DNode | DNode[] {
		const {
			title,
			subtitle,
			paddedContent = true,
			extraClasses
		} = this.properties;
		let titleHeader;
		if (typeof title === 'string') {
			titleHeader = v('h2', { classes: [css.titleText], innerHTML: title });
		}
		else if (typeof title !== 'undefined' && title) {
			titleHeader = v('h2', { classes: [css.titleText] }, [ title ]);
		}
		return v('div', {classes: [extraClasses ? extraClasses.root : null, css.root, shadow.depth2] }, [
			titleHeader ? v('div', { classes: [extraClasses ? extraClasses.title : null, css.title] }, [
				titleHeader,
				subtitle ? v('a', { classes: [css.titleText, css.subtitleText], innerHTML: subtitle }) : null
			]) : null,
			v('div', { classes: [css.content, paddedContent ? css.paddedContent : null] }, this.children)
		]);
	}
}

export default Card;
