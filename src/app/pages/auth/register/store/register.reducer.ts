import { Action, createReducer, on } from '@ngrx/store';
import { IState } from 'src/app/shared/models/state.interface';
import {
  setRegister,
  setRegisterClear,
  setRegisterError,
  setRegisterSucces,
} from './register.actions';

export const initialState: IState<any> = {
  response: null,
  pending: false,
  success: false,
  error: null,
};

const mySetRegisterReducer = createReducer(
  initialState,

  on(setRegister, (state, props) => ({
    ...state,
    response: null,
    pending: true,
    success: false,
    error: null,
  })),

  on(setRegisterSucces, (state, props) => ({
    ...state,
    response: props.payload,
    pending: false,
    success: true,
    error: null,
  })),

  on(setRegisterError, (state, props) => ({
    ...state,
    response: null,
    pending: false,
    success: false,
    error: props.payload,
  })),

  on(setRegisterClear, (state) => {
    return initialState;
  })
);

export function setRegisterReducer(
  state: IState<any> | undefined,
  action: Action
) {
  return mySetRegisterReducer(state, action);
}
