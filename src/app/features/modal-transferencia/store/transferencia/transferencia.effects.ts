import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  setTransferencia,
  setTransferenciaError,
  setTransferenciaSucces,
} from './transferencias.action';
import { TransferenciasService } from 'src/app/shared/services/transferencias/transferencias.service';
import { TransaccionesService } from 'src/app/shared/services/transacciones/transacciones.service';

@Injectable()
export class TransferenciaEffects {
  constructor(
    private actions$: Actions,
    private transaccionesService: TransaccionesService
  ) {}

  setTransferencia$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setTransferencia),
      mergeMap((props) =>
        this.transaccionesService.submitTransactions(props.form).pipe(
          map((response) => setTransferenciaSucces({ payload: response })),
          catchError((err) => of(setTransferenciaError({ payload: err })))
        )
      )
    )
  );
}
