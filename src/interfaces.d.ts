export type WithTarget<T extends Event = Event, E extends HTMLElement = HTMLInputElement> = T & { target: E };
import { PatientForm } from './interfaces.d';

export interface ResourceBased {
	loading: boolean;
	loaded: boolean;
}

export interface User {
	username: string;
	bio: string;
	image: string;
}

export interface AuthorProfile extends User {
	following: boolean;
}

export interface UserProfile extends User, ResourceBased {
	username: string;
	token: string;
}

export interface Comment {
	id: number;
	createdAt: string;
	updatedAt: string;
	body: string;
	author: AuthorProfile;
}

export interface Routing {
	outlet: string;
	params: { [index: string]: string };
}

export interface ArticleItem {
	slug: string;
	title: string;
	description: string;
	body: string;
	tagList: string[];
	createdAt: string;
	updatedAt: string;
	favorited: boolean;
	favoritesCount: number;
	author: AuthorProfile;
}

export interface Settings extends UserProfile {
	password: string;
}

export interface Article extends ResourceBased {
	item: ArticleItem;
	comments: Comment[];
	newComment: string;
}

export interface Feed extends ResourceBased {
	category: string;
	tagName: string;
	items: ArticleItem[];
	offset: number;
	pageNumber: number;
	total: number;
}

export interface Errors {
	[index: string]: string[];
}

export interface Login extends ResourceBased {
	username: string;
	password: string;
	failed: boolean;
}

export interface Register extends ResourceBased {
	username: string;
	password: string;
	email: string;
	failed: boolean;
}

export interface Editor extends ResourceBased {
	slug: string;
	title: string;
	description: string;
	body: string;
	tag: string;
	tagList: string[];
}

export interface Task {
	id: string;
	patientId: string;
	patientName: string;
	dateTime: string;
	type: string;
	status: string;
}

export interface Patient{
	id: string;
	patientId: string;
	patientName: string;
	patientPhoto: string;
}

export interface TaskSummary {
	today: number;
	week: number;
	total: number;
}

export interface UserDetails {
	username?: string;
	password?: string;
	authenticationToken?: string;
	refreshToken?: string;
	loginInProgress?: boolean;
	loginFailed?: boolean;
}

export interface PatientDetails {
	name: string;
	address: string;
	age: string;
	telephone: string;
}

export interface PatientForm {
	id: string;
	type: string;
	status: string;
}
export interface PatientInfo {
	id: string;
	patientDetails: PatientDetails;
	patientForms: PatientForm[];
}
export interface ApplicationMenu {
	open: boolean;
}

export interface Temperature {
	value: string;
	type?: string;
	description?: string;
	notify?: boolean;
	completed?: boolean;
}

export interface Pulse {
	value?: string;
	regular?: string;
	type?: string;
	description?: string;
	completed?: boolean;
}

export interface Respiration {
	value?: string;
	regular?: string;
	completed?: boolean;
}

export interface BloodPressure {
	sittingSystolic?: string;
	sittingDiastolic?: string;
	sittingRegular?: string;
	standingSystolic?: string;
	standingDiastolic?: string;
	standingRegular?: string;
	lyingSystolic?: string;
	lyingDiastolic?: string;
	lyingRegular?: string;
	completed?: boolean;
}

export interface Weight {
	value?: string;
	completed?: boolean;
}

export interface BloodSugar {
	value?: string;
	type?: string;
	completed?: boolean;
}

export interface Inr {
	value?: string;
	completed?: boolean;
}

export interface Vitals {
	completed: boolean;
	temperature?: Temperature;
	pulse?: Pulse;
	respiration?: Respiration;
	bloodPressure?: BloodPressure;
	weight?: Weight;
	bloodSugar?: BloodSugar;
	inr?: Inr;
}

export interface Location {
	completed: boolean;
	location: string;
}

export interface Cause {
	completed: boolean;
	cause: string;
}

export interface Scale {
	completed: boolean;
	value: string;
	intervention: string;
	notify: boolean;
}

export interface Description {
	completed: boolean;
	type: string;
	other: string;
}

export interface Pain {
	completed: boolean;
	location?: Location;
	cause?: Cause;
	scale?: Scale;
	description?: Description;
}

export interface SkilledNursingForm {
	[index: string]: any;
	id: string;
	category?: string;
	section?: string;
	vitals?: Vitals;
}

export interface Dashboard extends ResourceBased{
	taskSummary: TaskSummary;
	tasks: Task[];
}

export interface VisitDetails {
	visitId: string;
	patientDetails?: PatientDetails;
	patientForms?: PatientForm[];
}

export interface RouteSheet {
	id: string;
	formId: string;
	timeIn: string;
	timeOut: string;
	visitDate: string;
	mileage: string;
	surcharge: string;
	additionalPay: string;
	submit: boolean;
	billable: boolean;
	patientSignature: string;
	patientSignatureDate: string;
	staffSignature: string;
	staffSignatureDate: string;
	status: string;
}

export interface PatientConsentForm {
	patientConsent: PatientConsentDetails;
	patient: PatientConsentPatientDetails;
	hotline: PatientConsentHotlineDetails;
	agency: PatientConsentAgencyDetails;
}
export interface RecentPatientList{
	patientNumber: number;
	recentVisitPatients: Patient[],
}
export interface PatientConsentDetails {
	id: string;
	formId: string;
	signature: string;
	signatureDate: string;
	additionalSignature: string;
	additionalSignatureDate: string;
	status: string;
	lang: string;
	noInformationReleaseAbout: string;
	noInformationReleaseTo: string;
	completedAdvanceDirectives: number;
	durablePowerOfAttorney: number;
	livingWill: number;
	doNotResuscitate: number;
	doNotKnowAdvanceDirectives: number;
	otherAdvanceDirectives: string;
	photograph: number;
	providedServicesNursing: number;
	providedServicesCHHA: number;
	providedServicesPT: number;
	providedServicesOT: number;
	providedServicesST: number;
	providedServicesDietician: number;
	providedServicesMSW: number;
}

export interface PatientConsentPatientDetails {
	FNAME: string;
	LNAME: string;
	KEYID: number;
}

export interface PatientConsentHotlineDetails {
	name: string;
	phone: string;
	address: string;
}

export interface PatientConsentAgencyDetails {
	NAME: string;
	SHORTNAME: string;
	anticipatedChargesSN: string;
	anticipatedChargesMSW: string;
	anticipatedChargesCHHA: string;
	openDaysAndHours: string;
	administrator: string;
	address1: string;
	address2: string;
	phone: string;
	fax: string;
}
export interface LinkProperties {
	label?: string;
	icon?: string;
	onClick?: (event: MouseEvent) => void;
	href?: string;
}
export interface Header{
	title: string;
	showMenu: boolean;
	closeMenu: boolean;
	links:LinkProperties[];
}
export interface State {
	header: Header;

	user: UserProfile;
	errors: Errors;
	routing: Routing;
	login: Login;

	recentPatientList: RecentPatientList;
	patientInfo: PatientInfo;
	
	loading: boolean;
	headerTitle: string;
	showMenu: boolean;
	menuOpen: boolean;

	userDetails: UserDetails;
	dashboard?: any;
	visitDetails?: VisitDetails;
	applicationMenu?: ApplicationMenu;
	skilledNursingForm?: SkilledNursingForm;
	patientConsent?: PatientConsentForm;

	register: Register;
	editor: Editor;
	profile: AuthorProfile & ResourceBased;
	tags: string[];
	settings: Settings;
	feed: Feed;
	article: Article;

}
