import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { setConfirmRegister, setConfirmRegisterError, setConfirmRegisterSucces } from './confirm-register.actions';

@Injectable()
export class ConfirmRegisterEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  setConfirmRegister$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setConfirmRegister),
      mergeMap((props) =>
        this.authService.confirm(props.form).pipe(
          map((user) => setConfirmRegisterSucces()),
          catchError((err) => of(setConfirmRegisterError({ payload: err })))
        )
      )
    )
  );
}
