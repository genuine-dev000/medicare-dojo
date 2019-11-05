import { Store } from '@dojo/framework/stores/Store';
import { RecentVisitPatient, RecentVisitPatientProperties } from '../widgets/custom/RecentVisitPatient';
import { recentPatientListProcesses, onPatientClickProcess } from '../processes/recentPatientListProcesses';
import { State } from '../interfaces';
import { StoreContainer } from '@dojo/framework/stores/StoreInjector';

function getProperties(store: Store<State>): RecentVisitPatientProperties {
	const { get, path } = store;
	return {
		patientNumber: get(path('recentPatientList', 'patientNumber')),
		recentVisitPatients: get(path('recentPatientList', 'recentVisitPatients')),
		onPageLoad: recentPatientListProcesses(store),
		onPatientClick: onPatientClickProcess(store)

	};
}

export default StoreContainer(RecentVisitPatient, 'state', { paths: [['recentPatientList']], getProperties });
