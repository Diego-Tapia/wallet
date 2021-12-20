import { IUser } from './user.interface';

export interface ILoginResponse {
  token: string;
  refreshToken: string;
  user: IUser;
}
