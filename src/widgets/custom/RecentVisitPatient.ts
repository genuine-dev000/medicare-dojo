import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { ThemedMixin, theme, ThemedProperties } from '@dojo/framework/widget-core/mixins/Themed';
import { DNode } from '@dojo/framework/widget-core/interfaces';
import { v, w } from '@dojo/framework/widget-core/d';
import * as commonCss from '../styles/common.m.css';
import { Patient } from '../../interfaces';
import Card from './Card';

import * as css from './styles/RecentVisitPatient.m.css';
import { RecentVisitPatientPayload, PatientIDPayload } from '../../processes/interfaces';

import ListItem from './ListItem';

export interface RecentVisitPatientProperties extends ThemedProperties {
    patientNumber: number,
    recentVisitPatients: Patient[],
    onPatientClick: (userID: PatientIDPayload) => void;
    onPageLoad: (userNumber: RecentVisitPatientPayload) => void;
}
@theme(css)
export class RecentVisitPatient extends ThemedMixin(WidgetBase)<RecentVisitPatientProperties> {
    private _onPatientClick(id: string) {
        this.properties.onPatientClick({ patientID: id })
    }
    protected onAttach(): void{
        const { patientNumber = 3 } = this.properties;
        this.properties.onPageLoad({ patientNumber: patientNumber });
        console.log(this.properties);
		console.log("Recent-Visit-User-Panel attached");
	}
    protected render(): DNode | DNode[] {
        const {recentVisitPatients = [] } = this.properties;
        console.log(this.properties);
        if(recentVisitPatients.length === 0)
            return;
        const recentUserList = recentVisitPatients.map((user, index) => {
			return w(ListItem, {
				id: user.id,
                key: user.id,
                leadIcon: 'account_circle',
				title: user.patientName,
				extraClasses: { root: css.user,  },
				onClick: this._onPatientClick,
			});
		});
        return v('div',{classes: css.root},[]),
        w(Card, { key: 'recent-visits', title: 'Recent Visits', subtitle: 'ALL PATIENTS', paddedContent: false }, [
            v('ul', { classes: [commonCss.unstyledList] }, recentUserList)
        ])
    }
}
export default RecentVisitPatient;