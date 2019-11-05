import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { ThemedMixin, theme, ThemedProperties } from '@dojo/framework/widget-core/mixins/Themed';
import { DNode } from '@dojo/framework/widget-core/interfaces';
import { v } from '@dojo/framework/widget-core/d';
import * as css from '../styles/summaryList.m.css';
import * as commonCss from '../styles/common.m.css';

export interface SummaryDetail {
	heading: string;
	content: DNode;
}

export interface CardProperties extends ThemedProperties {
	details: SummaryDetail[];
}

export const CardBase = ThemedMixin(WidgetBase);

@theme(css)
export default class Card extends CardBase<CardProperties> {

	protected render(): DNode | DNode[] {
		const {
			details
		} = this.properties;

		const detailItems = details.map(({ heading, content}) => {
			return v('li', {}, [
				v('strong', [ content ]),
				v('span', [ `${heading}` ])
			]);
		});

		return v('ul', {
			classes: [css.root, commonCss.unstyledList, commonCss.inlineList]
		}, detailItems);
	}
}
