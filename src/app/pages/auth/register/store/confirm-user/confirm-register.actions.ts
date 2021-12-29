import { createAction, props } from '@ngrx/store';
import { IConfirmRegister } from 'src/app/shared/models/confirm-register.interface';


export const setConfirmRegister = createAction(
  '[Confirm Register Component] Set Confirm Register',
  props<{ form: IConfirmRegister }>()
);

export const setConfirmRegisterSucces = createAction(
  '[Confirm Register Component] Set Confirm Register Success');

export const setConfirmRegisterError = createAction(
  '[Confirm Register Component] Set Confirm Register Error',
  props<{ payload: any }>()
);

export const setConfirmRegisterClear = createAction('[Confirm Register Component] Set Confirm Register Clear');
