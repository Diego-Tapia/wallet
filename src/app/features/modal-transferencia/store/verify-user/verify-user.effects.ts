import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  setVerifyUser,
  setVerifyUserError,
  setVerifyUserSucces,
} from './verify-user.action';
import { UsuariosService } from 'src/app/shared/services/usuarios/usuarios.service';

@Injectable()
export class VerifyUserEffects {
  constructor(
    private actions$: Actions,
    private usuariosService: UsuariosService
  ) {}

  setVerifyUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setVerifyUser),
      mergeMap((props) =>
        this.usuariosService.verifyUser(props.userIdentifier).pipe(
          map((response) => setVerifyUserSucces({ payload: response })),
          catchError((err) => of(setVerifyUserError({ payload: err })))
        )
      )
    )
  );
}
