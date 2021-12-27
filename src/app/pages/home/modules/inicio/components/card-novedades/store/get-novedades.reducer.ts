import { Action, createReducer, on } from '@ngrx/store';
import { IState } from 'src/app/shared/models/state.interface';
import { setGetNovedades, setGetNovedadesClear, setGetNovedadesError, setGetNovedadesSucces } from './get-novedades.actions';

export const initialState: IState<any> = {
	response: null,
	pending: false,
	success: false,
	error: null
};

const mySetGetNovedadesReducer = createReducer(
	initialState,

	on(setGetNovedades, (state, props) => ({
		...state,
		response: null,
		pending: true,
		success: false,
		error: null
	})),

	on(setGetNovedadesSucces, (state, props) => ({
		...state,
		response: props.payload,
		pending: false,
		success: true,
		error: null
	})),

	on(setGetNovedadesError, (state, props) => ({
		...state,
		response: null,
		pending: false,
		success: false,
		error: props.payload
	})),

	on(setGetNovedadesClear, (state) => {
		return initialState;
	})
);

export function setGetNovedadesReducer(state: IState<any> | undefined, action: Action) {
	return mySetGetNovedadesReducer(state, action);
}
