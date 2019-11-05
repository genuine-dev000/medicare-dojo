import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { ThemedMixin, theme, ThemedProperties } from '@dojo/framework/widget-core/mixins/Themed';
import { I18nMixin } from '@dojo/framework/widget-core/mixins/I18n';
import { DNode } from '@dojo/framework/widget-core/interfaces';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/menu.m.css';
import ListItem from './custom/ListItem';
// import Header from './Header';
import headerContainer from '../containers/headerContainer';
import * as commonCss from './styles/common.m.css';
import nlsBundle from './nls/menu';
// import { WithTarget } from '../interfaces';

export interface MenuProperties extends ThemedProperties {
	onRequestRouteToDashboard: () => void;
	onRequestLogout: () => void;
}

export const MenuBase = I18nMixin(ThemedMixin(WidgetBase));

const menuItems = [
	{ id: 'dashboard', icon: 'home' },
	{ id: 'logout', icon: 'person_outline' }
];

@theme(css)
export default class Menu extends MenuBase<MenuProperties> {

	private onMenuItemClick(id: string) {
		switch (id) {
			case 'dashboard':
				this.properties.onRequestRouteToDashboard();
				break;
			case 'logout':
				this.properties.onRequestLogout();
				break;
		}
	}

	protected render(): DNode {
		// const messages = this.localizeBundle(nlsBundle);
		const messages = nlsBundle.messages;

		const listItemOverrides = {
			root: css.listRoot,
			leadIcon: css.listLeadIcon
		};

		const itemNodes = menuItems.map((item) => {
			return w(ListItem, {
				leadIcon: item.icon,
				leadAvatar: false,
				title: <string> (<any> messages)[item.id],
				onClick: this.onMenuItemClick,
				id: item.id,
				key: item.id,
				extraClasses: listItemOverrides
			});
		});

		return v('nav', { classes: [css.root] }, [
			w(headerContainer, { closeMenu: true, showMenu:false, title: messages.title }),
			v('ul', { classes: [css.list, commonCss.unstyledList] }, itemNodes)
		]);

	}
}
