import { createProcess } from '@dojo/framework/stores/process';
import { replace } from '@dojo/framework/stores/state/operations';
import { commandFactory } from './utils';
import { PatientPayload } from './interfaces';


const startLoadPatientInfoCommand = commandFactory<PatientPayload>(({ path, payload: {id, type} }) => {
	// console.log(id);
	return [
		 replace(path('routing','outlet'), 'visit'),
	];
});

// const loadPatientInfoCommand = commandFactory(async ({ get, path }) => {
// 	const accessJwt = get(path('user','token'));
// 	const patientNumber = get(path('recentPatientList', 'patientNumber'));
// 	// const response = await fetch(`${baseUrl}?x=getVisitDetails&visitid=${currentDate}&patientNum=${patientNumber}`, {
// 	// 	method: 'GET',
// 	// 	headers: getHeaders(accessJwt),
// 	// });
// 	// const result = await response.json();
// 	// if (result.status === 'Error') {
// 	// 	console.log("fail");
// 	// 	return [
// 	// 		replace(path('errors'), result.msg),
//     //         replace(path('loading'), false),
// 	// 	];
// 	// }
// 	// return [
// 	// 	replace(path('recentPatientList', 'recentVisitPatients'), result.patients),
// 	// 	replace(path('loading'), false),
// 	// ];
// 	return [];
// });
export const LoadPatientInfoProcess = createProcess('patient-info-load', [startLoadPatientInfoCommand]);


