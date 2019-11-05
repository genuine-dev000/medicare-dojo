// import global from '@dojo/framework/shim/global';
import { createProcess } from '@dojo/framework/stores/process';
import { replace } from '@dojo/framework/stores/state/operations';
import { commandFactory, getHeaders } from './utils';
import { baseUrl } from '../config';
const moment = require('moment-mini');
import { TitlePayload, TaskIDPayload } from './interfaces';
// import { summary } from './../widgets/styles/dashboard.m.css.d';
// const md5 = require('md5');
const startFetchDashboardDataCommand = commandFactory<TitlePayload>(({ path, payload: { title } }) => {
	return [
		replace(path('login', 'loading'), true),
        replace(path('loading'), true),
        replace(path('header', 'title'), title),
        replace(path('header', 'showMenu'), true)
	];
});
const fetchDashboardDataCommand = commandFactory(async ({ get, path }) => {
    const currentDate = moment().format('YYYY-MM-DD');
    const accessJwt = get(path('user','token'));

    const response = await fetch(`${baseUrl}?x=getUserVisits&dateFrom=${currentDate}&dateTo=${currentDate}`, {
		method: 'GET',
		headers: getHeaders(accessJwt),
	});
	
	const result = await response.json();
	if (result.status === 'Error') {
		console.log("fail");
		return [
			replace(path('errors'), result.msg),
			// replace(path('user'), {}),
            replace(path('loading'), false),
		];
	}
    return [
        replace(path('dashboard', 'taskSummary'), result.summary),
        replace(path('dashboard', 'tasks'), result.visits),
        // replace(path('loading'), false)
    ];
});
const onTaskClickCommand = commandFactory<TaskIDPayload>(({ get, path, payload:{ id } }) => {
    //should be modifed later
    // const accessJwt = global.sessionStorage.getItem('access_jwt');
    // console.log(accessJwt);
    console.log(get(path('routing', 'outlet')));
    console.log(id);
    return [
        replace(path('routing', 'outlet'), 'visit'),
        replace(path('routing','params'), {id}),
    ];
});

//Dashboard Event
export const onTaskClickProcess = createProcess('on-task-click', [onTaskClickCommand]);
export const fetchDashboardDataProcess = createProcess('fetch-dashboard-data', [startFetchDashboardDataCommand, fetchDashboardDataCommand]);