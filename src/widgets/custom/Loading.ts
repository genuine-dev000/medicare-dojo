import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { DNode } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme, ThemedProperties } from '@dojo/framework/widget-core/mixins/Themed';
import { v } from '@dojo/framework/widget-core/d';
import * as css from './styles/loading.m.css';

export interface LoadingProperties extends ThemedProperties {
	showSpinner: boolean;
}

export const LoadingBase = ThemedMixin(WidgetBase);

@theme(css)
export default class Loading extends LoadingBase<LoadingProperties> {

	protected render(): DNode {
		const {
			showSpinner
		} = this.properties;

		return v('div', { classes: [css.root] }, showSpinner ? [
			v('svg', { classes: [css.spinner], viewBox: '0 0 66 66' }, [
				v('circle', { classes: [css.path], cx: '33', cy: '33', r: '30'})
			])
		] : undefined );
	}
}
