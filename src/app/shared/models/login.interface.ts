import { IUserProfile } from './user-profile.interface';

export interface ILoginResponse {
  token: string;
  refreshToken: string;
  userProfile: IUserProfile;
}
