import { Action, createReducer, on } from '@ngrx/store';
import { IState } from 'src/app/shared/models/state.interface';
import { IUserProfile } from 'src/app/shared/models/user-profile.interface';
import {
  setVerifyUser,
  setVerifyUserClear,
  setVerifyUserError,
  setVerifyUserSucces,
} from './verify-user.action';

export const initialState: IState<IUserProfile | null> = {
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
  state: IState<IUserProfile | null> | undefined,
  action: Action
) {
  return mySetVerifyUserReducer(state, action);
}
