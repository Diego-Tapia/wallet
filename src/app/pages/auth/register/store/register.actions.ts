import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IRegister } from 'src/app/shared/models/register.interface';

export const setRegister = createAction(
  '[Register Component] Set Register',
  props<{ form: IRegister }>()
);

export const setRegisterSucces = createAction(
  '[Register Component] Set Register Success',
  props<{ payload: any }>()
);

export const setRegisterError = createAction(
  '[Register Component] Set Register Error',
  props<{ payload: HttpErrorResponse }>()
);

export const setRegisterClear = createAction('[Register Component] Set Register Clear');
