import { createProcess } from '@dojo/framework/stores/process';
import { replace } from '@dojo/framework/stores/state/operations';
import { commandFactory, getHeaders } from './utils';
import { baseUrl } from '../config';
import { RecentVisitPatientPayload, PatientIDPayload } from './interfaces';
const moment = require('moment-mini');


const startRecentPatientListLoadCommand = commandFactory<RecentVisitPatientPayload>(({ path, payload: { patientNumber } }) => {
	return [
		replace(path('recentPatientList', 'patientNumber'), patientNumber)
	];
});
const recentPatientListLoadCommand = commandFactory(async ({ get, path }) => {
	const currentDate = moment().format('YYYY-MM-DD');
	const accessJwt = get(path('user','token'));
	const patientNumber = get(path('recentPatientList', 'patientNumber'));
	const response = await fetch(`${baseUrl}?x=getRecentPatients&today=${currentDate}&patientNum=${patientNumber}`, {
		method: 'GET',
		headers: getHeaders(accessJwt),
	});
	const result = await response.json();
	if (result.status === 'Error') {
		console.log("fail");
		return [
			replace(path('errors'), result.msg),
            replace(path('loading'), false),
		];
	}
	return [
		replace(path('recentPatientList', 'recentVisitPatients'), result.patients),
		replace(path('loading'), false),
	];
});
const onPatientClick = commandFactory<PatientIDPayload>(async ({ get, path, payload: { patientID } }) => {
	console.log(patientID);
	return [
		// replace(path('recentPatientList', 'recentVisitPatients'), result.patients)
	];
});
export const recentPatientListProcesses = createProcess('recent-patient-list-load', [startRecentPatientListLoadCommand, recentPatientListLoadCommand]);
export const onPatientClickProcess = createProcess('recent-patient-list-load-click', [onPatientClick]);


