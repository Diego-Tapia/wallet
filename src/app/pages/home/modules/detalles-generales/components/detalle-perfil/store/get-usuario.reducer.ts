import { Action, createReducer, on } from '@ngrx/store';
import { IState } from 'src/app/shared/models/state.interface';
import { IUser } from 'src/app/shared/models/user.interface';
import { setGetUsuario, setGetUsuarioClear, setGetUsuarioError, setGetUsuarioSucces } from './get-usuario.actions';

export const initialState: IState<IUser | null> = {
	response: null,
	pending: false,
	success: false,
	error: null
};

const mySetGetUsuarioReducer = createReducer(
	initialState,

	on(setGetUsuario, (state, props) => ({
		...state,
		response: null,
		pending: true,
		success: false,
		error: null
	})),

	on(setGetUsuarioSucces, (state, props) => ({
		...state,
		response: props.payload,
		pending: false,
		success: true,
		error: null
	})),

	on(setGetUsuarioError, (state, props) => ({
		...state,
		response: null,
		pending: false,
		success: false,
		error: props.payload
	})),

	on(setGetUsuarioClear, (state) => {
		return initialState;
	})
);

export function setGetUsuarioReducer(state: IState<IUser> | undefined, action: Action) {
	return mySetGetUsuarioReducer(state, action);
}
