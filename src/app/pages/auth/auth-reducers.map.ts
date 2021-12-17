import { ActionReducerMap } from '@ngrx/store';
import { ILoginResponse } from 'src/app/shared/models/login.interface';
import { IState } from 'src/app/shared/models/state.interface';
import { setLoginReducer } from './login/store/auth.reducer';

export interface IAuthReducerMap {
  setLogin: IState<ILoginResponse | null>;
}

export const authRedecuersMap: ActionReducerMap<IAuthReducerMap> = {
  setLogin: setLoginReducer,
};
