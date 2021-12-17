import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { NovedadesService } from 'src/app/shared/services/novedades/novedades.service';
import { setGetNovedades, setGetNovedadesError, setGetNovedadesSucces } from './get-novedades.actions';


@Injectable()
export class GetNovedadesEffects {
	constructor(private actions$: Actions, private activosService: NovedadesService) { }

	setGetNovedades$ = createEffect(() =>
		this.actions$.pipe(
			ofType(setGetNovedades),
			mergeMap((props) =>
				this.activosService.getNovedades().pipe(
					map((activos) => setGetNovedadesSucces({ payload: activos })),
					catchError((err) => of(setGetNovedadesError({ payload: err })))
				)
			)
		)
	);
}
