import { UserProfile } from '../interfaces';
import { OutletContext } from '@dojo/framework/routing/interfaces';

// export interface DashboardPayload{
// 	dashboard: Dashboard
// }
export interface SlugPayload {
	slug: string;
}

export interface TitlePayload {
	title: string;
}
export interface RecentVisitPatientPayload{
	patientNumber: number
}
export interface PatientIDPayload{
	patientID: string;
}
export interface PatientPayload{
	id: string;
	type: string;
}
export interface DescriptionPayload {
	description: string;
}
export interface BodyPayload {
	body: string;
}

export interface TagPayload {
	tag: string;
}

export interface BioPayload {
	bio: string;
}

export interface ImagePayload {
	imageUrl: string;
}

export interface EmailPayload {
	email: string;
}
export interface TaskIDPayload{
	id: string;
}
export interface MenuIDPayload{
	id: string;
}
export interface MenuTogglePayload{
	show: boolean;
}
export interface UsernamePayload {
	username: string;
}

export interface PasswordPayload {
	password: string;
}

export interface FollowUserPayload {
	username: string;
	following: boolean;
}

export interface FavoriteArticlePayload extends SlugPayload {
	favorited: boolean;
}

export interface NewCommentPayload {
	newComment: string;
}

export interface AddCommentPayload extends SlugPayload, NewCommentPayload {}

export interface DeleteCommentPayload extends SlugPayload {
	id: number;
}

export interface FetchFeedPayload {
	type: string;
	filter: string;
	page: number;
}

export interface SetSessionPayload {
	session: UserProfile;
}

export interface ChangeRoutePayload {
	outlet: string;
	context: OutletContext;
}

export interface InitialPayload{
	outlet: string;
	loading: boolean;
}