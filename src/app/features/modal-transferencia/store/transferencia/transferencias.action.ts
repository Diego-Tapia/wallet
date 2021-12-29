import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IApiResponse } from 'src/app/shared/models/api.interface';
import {
  ITransferenciaReq,
  ITransferenciaRes,
} from 'src/app/shared/models/transferencia.interface';

export const setTransferencia = createAction(
  '[Transferencia Component] Set Transferencia',
  props<{ form: ITransferenciaReq }>()
);

export const setTransferenciaSucces = createAction(
  '[Transferencia Component] Set Transferencia Success',
  props<{ payload: IApiResponse<ITransferenciaRes> }>()
);

export const setTransferenciaError = createAction(
  '[Transferencia Component] Set Transferencia Error',
  props<{ payload: HttpErrorResponse }>()
);

export const setTransferenciaClear = createAction(
  '[Transferencia Component] Set Transferencia Clear'
);
