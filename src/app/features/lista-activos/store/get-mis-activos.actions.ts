import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IApiResponse } from 'src/app/shared/models/api.interface';
import { IWallet } from 'src/app/shared/models/wallet.interface';

export const setGetMisActivos = createAction(
	'[Mis Activos Component] Set Get Mis Activos');

export const setGetMisActivosSucces = createAction(
	'[Mis Activos Component] Set Get Mis Activos Success',
	props<{ payload: IApiResponse<IWallet> }>()
);

export const setGetMisActivosError = createAction(
	'[Mis Activos Component] Set Get Mis Activos Error', 
	props<{ payload: HttpErrorResponse }>());

export const setGetMisActivosClear = createAction(
	'[Mis Activos Component] Set Get Mis Activos Clear');
