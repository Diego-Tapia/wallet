import { Action, createReducer, on } from '@ngrx/store';
import { IState } from 'src/app/shared/models/state.interface';
import {
  setConfirmRegister,
  setConfirmRegisterClear,
  setConfirmRegisterError,
  setConfirmRegisterSucces,
} from './confirm-register.actions';

export const initialState: IState<any> = {
  response: null,
  pending: false,
  success: false,
  error: null,
};

const mySetConfirmRegisterReducer = createReducer(
  initialState,

  on(setConfirmRegister, (state, props) => ({
    ...state,
    response: null,
    pending: true,
    success: false,
    error: null,
  })),

  on(setConfirmRegisterSucces, (state, props) => ({
    ...state,
    response: null,
    pending: false,
    success: true,
    error: null,
  })),

  on(setConfirmRegisterError, (state, props) => ({
    ...state,
    response: null,
    pending: false,
    success: false,
    error: props.payload,
  })),

  on(setConfirmRegisterClear, (state) => {
    return initialState;
  })
);

export function setConfirmRegisterReducer(
  state: IState<any> | undefined,
  action: Action
) {
  return mySetConfirmRegisterReducer(state, action);
}
