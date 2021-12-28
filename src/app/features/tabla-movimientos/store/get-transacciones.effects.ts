import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ActivosService } from 'src/app/shared/services/activos/activos.service';
import { setGetTransactions, setGetTransactionsError, setGetTransactionsSucces } from './get-transacciones.actions';
import { TransaccionesService } from 'src/app/shared/services/transacciones/transacciones.service';

@Injectable()
export class GetTransactionsEffects {
	constructor(private actions$: Actions, private transaccionesService: TransaccionesService) { }

	setGetTransactions$ = createEffect(() =>
		this.actions$.pipe(
			ofType(setGetTransactions),
			mergeMap((props) =>
				this.transaccionesService.getTransactions().pipe(
					map((transaction) => setGetTransactionsSucces({ payload: transaction })),
					catchError((err) => of(setGetTransactionsError({ payload: err })))
				)
			)
		)
	);
}
