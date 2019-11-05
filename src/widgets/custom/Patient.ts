import { deepAssign } from '@dojo/framework/core/util';
import { WidgetBase } from '@dojo/framework/widget-core/WidgetBase';
import { ThemedMixin, theme, ThemedProperties } from '@dojo/framework/widget-core/mixins/Themed';
import { I18nMixin } from '@dojo/framework/widget-core/mixins/I18n';
import { DNode } from '@dojo/framework/widget-core/interfaces';
import Dialog from '@dojo/widgets/dialog';

import { PatientDetails, PatientForm } from './../../interfaces';
import Card from './Card';
import ListItem from './ListItem';
import SummaryList from './SummaryList';
import { v, w } from '@dojo/framework/widget-core/d';
import * as css from './styles/patient.m.css';
import * as commonCss from '../styles/common.m.css';

import nlsBundle from '../nls/patient';
import { PatientPayload } from './../../processes/interfaces.d';

export interface PatientProperties extends ThemedProperties {
	patientDetails: PatientDetails;
	patientForms: PatientForm[];
	slug: string;
	onFormClick: (val: PatientPayload) => void;
}

export const PatientBase = I18nMixin(ThemedMixin(WidgetBase));

@theme(css)
export default class Patient extends PatientBase<PatientProperties> {

	private _openDialog = false;

	private onPatientConsentFormClick(id: string) {
		this.properties.onFormClick && this.properties.onFormClick({id: id, type: 'patient-consent'});
	}

	private onNursingNoteFormClick(id: string) {
		this.properties.onFormClick && this.properties.onFormClick({id: id, type: 'nursing-note'});
	}

	private onRouteSheetFormClick(id: string) {
		this.properties.onFormClick && this.properties.onFormClick({id: id, type: 'route-sheet'});
	}

	private openDialog() {
		this._openDialog = true;
		this.invalidate();
	}

	private onDialogRequestClose() {
		this._openDialog = false;
		this.invalidate();
	}

	protected render(): DNode {
		console.log(this.properties.slug);
		const messages = nlsBundle.messages;
		const { patientDetails: { name = '', address = '', age = '', telephone = '' }, patientForms } = this.properties;

		const formItems = patientForms.map((form, index) => {

			const isComplete = form.status === 'Complete';
			const listItemProperties = {
				id: form.id,
				key: form.id,
				title: form.type,
				icon: isComplete ? 'check_circle' : 'lens',
				leadIcon: 'description',
				leadAvatar: false,
				overrideClasses: { root: css.form, icon: isComplete ? commonCss.complete : commonCss.incomplete },
				bind: this
			};

			if (form.type === 'Skilled Nursing Note') {
				deepAssign(listItemProperties, { onClick: this.onNursingNoteFormClick });
			}
			else if (form.type === 'Route Sheet') {
				deepAssign(listItemProperties, { onClick: this.onRouteSheetFormClick });
			}
			else if (form.type === 'Patient Consent') {
				deepAssign(listItemProperties, { onClick: this.onPatientConsentFormClick });
			}
			else {
				deepAssign(listItemProperties, { onClick: this.openDialog });
			}

			return w(ListItem, listItemProperties);
		});

		const summaryDetails = [
			{ heading: messages.age, content: `${age}` },
			{ heading: messages.phone, content: `${telephone}` }
		];

		return v('div', [
			this._openDialog ? w(Dialog, {
				key: 'dialog',
				open: true,
				title: 'Warning',
				underlay: true,
				closeable: true,
				// classes: { "@dojo/widgets/dialog": {title: css.dialogTitle, main: css.dialogMain, underlayVisible: css.dialogUnderlay }},
				onRequestClose: this.onDialogRequestClose
			}, [ messages.formNotSupported ]) : null,
			w(Card, {
				key: 'patient',
				title: w(ListItem, {
					id: 'patientDetails',
					title: name,
					textBody: address,
					leadIcon: 'person',
					leadAvatar: true,
					extraClasses: { root: css.summaryListItem }
				}),
				extraClasses: { root: css.summary, title: css.summaryTitle }
			}, [ w(SummaryList, { details: summaryDetails }) ]),
			w(Card, { key: 'forms', paddedContent: false }, [
				v('ul', { classes: [commonCss.unstyledList] }, formItems)
			])
		]);
	}
}
