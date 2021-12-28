import { Action, createReducer, on } from '@ngrx/store';
import { IApiResponse } from 'src/app/shared/models/api.interface';
import { IState } from 'src/app/shared/models/state.interface';
import {
  setVerifyUser,
  setVerifyUserClear,
  setVerifyUserError,
  setVerifyUserSucces,
} from './verify-user.action';

export const initialState: IState<IApiResponse<any> | null> = {
  response: null,
  pending: false,
  success: false,
  error: null,
};

const mySetVerifyUserReducer = createReducer(
  initialState,

  on(setVerifyUser, (state, props) => ({
    
    ...state,
    response: null,
    pending: true,
    success: false,
    error: null,
  })),

  on(setVerifyUserSucces, (state, props) => ({
    ...state,
    response: props.payload,
    pending: false,
    success: true,
    error: null,
  })),

  on(setVerifyUserError, (state, props) => ({
    ...state,
    response: null,
    pending: false,
    success: false,
    error: props.payload,
  })),

  on(setVerifyUserClear, (state) => {
    return initialState;
  })
);

export function setVerifyUserReducer(
  state: IState<IApiResponse<any> | null> | undefined,
  action: Action
) {
  return mySetVerifyUserReducer(state, action);
}
