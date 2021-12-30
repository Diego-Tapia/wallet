import { Action, createReducer, on } from '@ngrx/store';
import { IActivo } from 'src/app/shared/models/activo.interface';
import { IApiResponse } from 'src/app/shared/models/api.interface';
import { IState } from 'src/app/shared/models/state.interface';
import { ITransferenciaRes } from 'src/app/shared/models/transferencia.interface';
import { setGetTransactions, setGetTransactionsClear, setGetTransactionsError, setGetTransactionsSucces } from './get-transacciones.actions';

export const initialState: IState<ITransferenciaRes[] | null> = {
	response: null,
	pending: false,
	success: false,
	error: null
};

const mySetGetTransactionsReducer = createReducer(
	initialState,

	on(setGetTransactions, (state, props) => ({
		...state,
		response: null,
		pending: true,
		success: false,
		error: null
	})),

	on(setGetTransactionsSucces, (state, props) => ({
		...state,
		response: props.payload,
		pending: false,
		success: true,
		error: null
	})),

	on(setGetTransactionsError, (state, props) => ({
		...state,
		response: null,
		pending: false,
		success: false,
		error: props.payload
	})),

	on(setGetTransactionsClear, (state) => {
		return initialState;
	})
);

export function setGetTransactionsReducer(state: IState<ITransferenciaRes[] | null> | undefined, action: Action) {
	return mySetGetTransactionsReducer(state, action);
}
