import { DNode, VNodeProperties } from '@dojo/framework/widget-core/interfaces';
import { ThemedMixin, theme } from '@dojo/framework/widget-core/mixins/Themed';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { v } from '@dojo/framework/widget-core/d';
import * as css from './styles/Header.m.css';
import * as icons from './styles/icons.m.css';
import { LinkProperties } from '../interfaces';
import { MenuTogglePayload } from '../processes/interfaces';

export interface HeaderProperties {
	title: string;
	showMenu?: boolean;
	closeMenu?: boolean;
	links?: LinkProperties[];
	onMenuClick: (show: MenuTogglePayload) => void;
}

@theme(css)
export class Header extends ThemedMixin(WidgetBase)<HeaderProperties> {

	private _onOpenMenuClick(event: MouseEvent) {
			this.properties.onMenuClick({show: true});
	}
	private _onCloseMenuClick(event: MouseEvent) {
		this.properties.onMenuClick({show: false});
}
	protected render(): DNode | DNode[] {
		const {
			title,
			showMenu = false,
			closeMenu = false,
			links = []
		} = this.properties;

		const linkNodes = links.map((link) => {
			const {
				label = '',
				icon = '',
				onClick,
				// href = ''
			} = link;

			const linkProperties: VNodeProperties = {
				classes: [css.link]
			};

			// if (href) {
			//  	linkProperties.href = href;
			// }

			if (onClick) {
				linkProperties.onclick = onClick;
				
			}

			return v('a', linkProperties, [
				label ? label : null,
				icon ? v('i', { classes: [css.icon, icons.icon] }, [ icon ]) : null
			]);
		});

		return v('header', { classes: [css.root] }, [
			showMenu ? v('div', { key: 'menu', classes: [css.menuButton], onclick: this._onOpenMenuClick }, [
				v('i', { classes: [icons.icon] }, [ 'menu' ])
			]) : null,
			closeMenu ? v('div', { key: 'menu', classes: [css.menuButton], onclick: this._onCloseMenuClick }, [
				v('i', { classes: [icons.icon] }, [ 'clear' ])
			]) : null,
			v('div', { classes: [css.row] }, [
				v('span', { classes: [css.title] }, [ title ]),
				v('div', { classes: [css.spacer] }),
				v('nav', { classes: [css.navigation] }, linkNodes)
			])
		]);

	}
}

export default Header;
