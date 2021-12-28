import { Action, createReducer, on } from '@ngrx/store';
import { IApiResponse } from 'src/app/shared/models/api.interface';
import { IState } from 'src/app/shared/models/state.interface';
import { ITransferenciaRes } from 'src/app/shared/models/transferencia.interface';
import {
  setTransferencia,
  setTransferenciaClear,
  setTransferenciaError,
  setTransferenciaSucces,
} from './transferencias.action';

export const initialState: IState<IApiResponse<ITransferenciaRes> | null> = {
  response: null,
  pending: false,
  success: false,
  error: null,
};

const mySetTransferenciaReducer = createReducer(
  initialState,

  on(setTransferencia, (state, props) => ({
    ...state,
    response: null,
    pending: true,
    success: false,
    error: null,
  })),

  on(setTransferenciaSucces, (state, props) => ({
    ...state,
    response: props.payload,
    pending: false,
    success: true,
    error: null,
  })),

  on(setTransferenciaError, (state, props) => ({
    ...state,
    response: null,
    pending: false,
    success: false,
    error: props.payload,
  })),

  on(setTransferenciaClear, (state) => {
    return initialState;
  })
);

export function setTransferenciaReducer(
  state: IState<IApiResponse<ITransferenciaRes> | null> | undefined,
  action: Action
) {
  return mySetTransferenciaReducer(state, action);
}
