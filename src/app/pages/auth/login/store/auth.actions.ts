import { createAction, props } from '@ngrx/store';
import { ILoginResponse } from 'src/app/shared/models/login.interface';

export const setLogin = createAction(
  '[Login Component] Set Login',
  props<{ username: string; password: string }>()
);

export const setLoginSucces = createAction(
  '[Login Component] Set Login Success',
  props<{ payload: ILoginResponse }>()
);

export const setLoginError = createAction(
  '[Login Component] Set Login Error',
  props<{ payload: any }>()
);

export const setLoginClear = createAction('[Login Component] Set Login Clear');
