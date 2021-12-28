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

@Injectable()
export class TransferenciaEffects {
  constructor(
    private actions$: Actions,
    private transferenciaService: TransferenciasService
  ) {}

  setTransferencia$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setTransferencia),
      mergeMap((props) =>
        this.transferenciaService.submitTransferencia(props.form).pipe(
          map((response) => setTransferenciaSucces({ payload: response })),
          catchError((err) => of(setTransferenciaError({ payload: err })))
        )
      )
    )
  );
}
