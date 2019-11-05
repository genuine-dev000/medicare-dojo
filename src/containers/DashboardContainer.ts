import { Store } from '@dojo/framework/stores/Store';
import Dashboard, { DashboardProperties } from './../widgets/Dashboard';
import { onTaskClickProcess, fetchDashboardDataProcess } from '../processes/dashboardProcesses';
import { State } from '../interfaces';
import { StoreContainer } from '@dojo/framework/stores/StoreInjector';

function getProperties(store: Store<State>): DashboardProperties {
	const { get, path } = store;
	return {
            tasks: get(path('dashboard', 'tasks')),
            taskSummary: get(path('dashboard','taskSummary')),
            fetchDashboardData: fetchDashboardDataProcess(store),
            onTaskClick: onTaskClickProcess(store)
	};
}

export default StoreContainer(Dashboard, 'state', { paths: [['dashboard']], getProperties });
