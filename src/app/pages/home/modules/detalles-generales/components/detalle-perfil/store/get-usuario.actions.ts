import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const setGetUsuario = createAction(
	'[Usuario Component] Set Get Usuario');

export const setGetUsuarioSucces = createAction(
	'[Usuario Component] Set Get Usuario Success',
	props<{ payload: any }>()
);

export const setGetUsuarioError = createAction(
	'[Usuario Component] Set Get Usuario Error',
	props<{ payload: HttpErrorResponse }>());

export const setGetUsuarioClear = createAction(
	'[Usuario Component] Set Get Usuario Clear');
