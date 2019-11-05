import { Store } from '@dojo/framework/stores/Store';
import Patient, { PatientProperties } from './../widgets/custom/Patient';
import { LoadPatientInfoProcess } from '../processes/patientProcesses';
import { State } from '../interfaces';
import { StoreContainer } from '@dojo/framework/stores/StoreInjector';

function getProperties(store: Store<State>, properties: PatientProperties): PatientProperties {
	const { get, path } = store;
	return {
            patientDetails: get(path('patientInfo', 'patientDetails')),
            patientForms: get(path('patientInfo','patientForms')),
            onFormClick: LoadPatientInfoProcess(store),
            slug: properties.slug
	};
}

export default StoreContainer(Patient, 'state', { paths: [['patientInfo']], getProperties });
