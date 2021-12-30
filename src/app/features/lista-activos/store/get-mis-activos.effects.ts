import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ActivosService } from 'src/app/shared/services/activos/activos.service';
import { setGetMisActivos, setGetMisActivosError, setGetMisActivosSucces } from './get-mis-activos.actions';

@Injectable()
export class GetMisActivosEffects {
	constructor(private actions$: Actions, private activosService: ActivosService) { }

	setGetMisActivos$ = createEffect(() =>
		this.actions$.pipe(
			ofType(setGetMisActivos),
			mergeMap((props) =>
				this.activosService.getMisActivos().pipe(
					map((wallet) => setGetMisActivosSucces({ payload: wallet })),
					catchError((err) => of(setGetMisActivosError({ payload: err })))
				)
			)
		)
	);
}
