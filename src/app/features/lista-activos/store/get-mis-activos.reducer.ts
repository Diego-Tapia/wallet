import { Action, createReducer, on } from '@ngrx/store';
import { IApiResponse } from 'src/app/shared/models/api.interface';
import { IState } from 'src/app/shared/models/state.interface';
import { IWallet } from 'src/app/shared/models/wallet.interface';
import { setGetMisActivos, setGetMisActivosClear, setGetMisActivosError, setGetMisActivosSucces } from './get-mis-activos.actions';

export const initialState: IState<IApiResponse<IWallet> | null> = {
	response: null,
	pending: false,
	success: false,
	error: null
};

const mySetGetMisActivosReducer = createReducer(
	initialState,

	on(setGetMisActivos, (state, props) => ({
		...state,
		response: null,
		pending: true,
		success: false,
		error: null
	})),

	on(setGetMisActivosSucces, (state, props) => ({
		...state,
		response: props.payload,
		pending: false,
		success: true,
		error: null
	})),

	on(setGetMisActivosError, (state, props) => ({
		...state,
		response: null,
		pending: false,
		success: false,
		error: props.payload
	})),

	on(setGetMisActivosClear, (state) => {
		return initialState;
	})
);

export function setGetMisActivosReducer(state: IState<IApiResponse<IWallet> | null> | undefined, action: Action) {
	return mySetGetMisActivosReducer(state, action);
}
