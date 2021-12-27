import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { setRegister, setRegisterError, setRegisterSucces } from './register.actions';

@Injectable()
export class RegisterEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  setRegister$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setRegister),
      mergeMap((props) =>
        this.authService.register(props.form).pipe(
          map((register) => setRegisterSucces({ payload: register })),
          catchError((err) => of(setRegisterError({ payload: err })))
        )
      )
    )
  );
}
