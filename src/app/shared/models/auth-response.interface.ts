import { IUserProfile } from './user-profile.interface';

export interface IAuthResponse {
	token: string;
	refreshToken: string;
	userProfile: IUserProfile;
}
