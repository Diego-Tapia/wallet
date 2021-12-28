import { createAction, props } from '@ngrx/store';

export const setGetTransactions = createAction(
	'[Activos Component] Set Get Transactions');

export const setGetTransactionsSucces = createAction(
	'[Activos Component] Set Get Transactions Success',
	props<{ payload: any }>()
);

export const setGetTransactionsError = createAction(
	'[Activos Component] Set Get Transactions Error', 
	props<{ payload: any }>());

export const setGetTransactionsClear = createAction(
	'[Activos Component] Set Get Transactions Clear');
