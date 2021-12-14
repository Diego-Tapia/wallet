import { createAction, props } from '@ngrx/store';

export const setGetNovedades = createAction(
	'[Novedades Component] Set Get Novedades');

export const setGetNovedadesSucces = createAction(
	'[Novedades Component] Set Get Novedades Success',
	props<{ payload: any }>()
);

export const setGetNovedadesError = createAction(
	'[Novedades Component] Set Get Novedades Error',
	props<{ payload: any }>());

export const setGetNovedadesClear = createAction(
	'[Novedades Component] Set Get Novedades Clear');
