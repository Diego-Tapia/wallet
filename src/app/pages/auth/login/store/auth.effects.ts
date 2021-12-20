import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { setLogin, setLoginError, setLoginSucces } from './auth.actions';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  setLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setLogin),
      mergeMap((props) =>
        this.authService.logIn(props.username, props.password).pipe(
          map((activos) => setLoginSucces({ payload: activos })),
          catchError((err) => of(setLoginError({ payload: err })))
        )
      )
    )
  );
}
