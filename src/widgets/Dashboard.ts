import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { ThemedMixin, theme, ThemedProperties } from '@dojo/framework/widget-core/mixins/Themed';
import { DNode } from '@dojo/framework/widget-core/interfaces';

// import { Task, TaskSummary } from '../interfaces';
import Card from './custom/Card';
import ListItem from './custom/ListItem';
import SummaryList from './custom/SummaryList';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/dashboard.m.css';
import * as commonCss from './styles/common.m.css';
import nlsBundle from './nls/dashboard';
import { TaskIDPayload } from '../processes/interfaces';
import { I18nMixin } from '@dojo/framework/widget-core/mixins/I18n';
import { Task, TaskSummary } from '../interfaces';
import { TitlePayload } from '../processes/interfaces';
import RecentVisitPatientContainer from '../containers/RecentVisitPatientContainer';
// import { Store } from '@dojo/framework/stores/Store';
// import { State } from '../interfaces';
// const store = new Store<State>();

export interface DashboardProperties extends ThemedProperties {
	tasks: Task[];
	taskSummary: TaskSummary;
	fetchDashboardData: (opts: TitlePayload) => void;
	onTaskClick: (id: TaskIDPayload) => void;
}


const timeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
function formatTime(dateTime: string): string {
	return new Date(dateTime.replace(' ', 'T')).toLocaleTimeString('en-US', timeFormatOptions);
}

@theme(css)
export default class Dashboard extends ThemedMixin(I18nMixin(WidgetBase))<DashboardProperties> {
	private onTaskClick(id: string) {
		console.log(id);
		this.properties.onTaskClick && this.properties.onTaskClick({ id });
	}
	protected onAttach(): void{
		this.properties.fetchDashboardData({title: 'Dashboard'});
		console.log("Dashboard attached");
	}
	protected render(): DNode {
		const messages = nlsBundle.messages;
		const { tasks = [], taskSummary } = this.properties;
		if(taskSummary === undefined)
			return;
		const taskItems = tasks.map((task, index) => {
			const formattedTime = formatTime(task.dateTime);
			const isComplete = task.status === 'Performed';
			console.log(task.id);
			return w(ListItem, {
				id: task.id,
				key: task.id,
				title: task.patientName,
				subtitle: `${formattedTime} | ${task.type}`,
				icon: isComplete  ? 'check_circle' : 'lens',
				extraClasses: { root: css.task, icon: isComplete ? commonCss.complete : commonCss.incomplete },
				onClick: this.onTaskClick,
			});
		});

		const summaryDetails = [
			{ heading: messages.today, content: `${taskSummary.today}` },
			{ heading: messages.week, content: `${taskSummary.week}` },
			{ heading: messages.total, content: `${taskSummary.total}` }
		];

		return v('div', [
			w(Card, {
				key: 'card0204',
				title: messages.myTasksTitle,
				extraClasses: { root: css.summary, title: css.summaryTitle }
			}, [ w(SummaryList, { details: summaryDetails }) ]),
			w(Card, { key: 'tasks', title: messages.upcomingTasksTitle, subtitle: 'SEE ALL TASKS', paddedContent: false }, [
				v('ul', { classes: [commonCss.unstyledList] }, taskItems)
			]),
			w(RecentVisitPatientContainer,{patientNumber: 2})
		]);
	}
}
