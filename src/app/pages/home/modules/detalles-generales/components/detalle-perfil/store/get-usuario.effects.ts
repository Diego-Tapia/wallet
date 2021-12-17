import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { setGetUsuario, setGetUsuarioError, setGetUsuarioSucces } from './get-usuario.actions';
import { UsuariosService } from 'src/app/shared/services/usuarios/usuarios.service';

@Injectable()
export class GetUsuarioEffects {
	constructor(private actions$: Actions, private activosService: UsuariosService) { }

	setGetUsuario$ = createEffect(() =>
		this.actions$.pipe(
			ofType(setGetUsuario),
			mergeMap((props) =>
				this.activosService.getUsuario().pipe(
					map((activos) => setGetUsuarioSucces({ payload: activos })),
					catchError((err) => of(setGetUsuarioError({ payload: err })))
				)
			)
		)
	);
}
