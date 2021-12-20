import { Action, createReducer, on } from '@ngrx/store';
import { ILoginResponse } from 'src/app/shared/models/login.interface';
import { IState } from 'src/app/shared/models/state.interface';
import {
  setLogin,
  setLoginClear,
  setLoginError,
  setLoginSucces,
} from './auth.actions';

export const initialState: IState<ILoginResponse | null> = {
  response: null,
  pending: false,
  success: false,
  error: null,
};

const mySetLoginReducer = createReducer(
  initialState,

  on(setLogin, (state, props) => ({
    ...state,
    response: null,
    pending: true,
    success: false,
    error: null,
  })),

  on(setLoginSucces, (state, props) => ({
    ...state,
    response: props.payload,
    pending: false,
    success: true,
    error: null,
  })),

  on(setLoginError, (state, props) => ({
    ...state,
    response: null,
    pending: false,
    success: false,
    error: props.payload,
  })),

  on(setLoginClear, (state) => {
    return initialState;
  })
);

export function setLoginReducer(
  state: IState<ILoginResponse | null> | undefined,
  action: Action
) {
  return mySetLoginReducer(state, action);
}
