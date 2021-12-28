import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const setVerifyUser = createAction(
  '[VerifyUser Component] Set VerifyUser',
  props<{ userIdentifier: string }>()
);

export const setVerifyUserSucces = createAction(
  '[VerifyUser Component] Set VerifyUser Success',
  props<{ payload: any }>()
);

export const setVerifyUserError = createAction(
  '[VerifyUser Component] Set VerifyUser Error',
  props<{ payload: HttpErrorResponse }>()
);

export const setVerifyUserClear = createAction(
  '[VerifyUser Component] Set VerifyUser Clear'
);
