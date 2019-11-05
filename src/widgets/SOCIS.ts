import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';

import M1306 from './custom/M1306';
import M1311 from './custom/M1311';
import M1322 from './custom/M1322';
import M1324 from './custom/M1324';
import M1330 from './custom/M1330';
import M1332 from './custom/M1332';
import M1334 from './custom/M1334';
import M1340 from './custom/M1340';
import M1342 from './custom/M1342';

import * as css from './styles/SOCPHAD.m.css';

export default class Home extends WidgetBase {

	protected render() {
		return v('div',{classes: [css.root]},[
				w(M1306,{key: 'm1306'},[]),
				w(M1311,{key: 'm1311'},[]),
				w(M1322,{key: 'm1322'},[]),
				w(M1324,{key: 'm1324'},[]),
				w(M1330,{key: 'm1330'},[]),
				w(M1332,{key: 'm1332'},[]),
				w(M1334,{key: 'm1334'},[]),
				w(M1340,{key: 'm1340'},[]),
				w(M1342,{key: 'm1342'},[]),
		]);
	}
}
