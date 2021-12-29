import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IApiResponse } from 'src/app/shared/models/api.interface';
import { IUserProfile } from 'src/app/shared/models/user-profile.interface';

export const setVerifyUser = createAction(
  '[VerifyUser Component] Set VerifyUser',
  props<{ userIdentifier: string }>()
);

export const setVerifyUserSucces = createAction(
  '[VerifyUser Component] Set VerifyUser Success',
  props<{ payload: IUserProfile }>()
);

export const setVerifyUserError = createAction(
  '[VerifyUser Component] Set VerifyUser Error',
  props<{ payload: HttpErrorResponse }>()
);

export const setVerifyUserClear = createAction(
  '[VerifyUser Component] Set VerifyUser Clear'
);
