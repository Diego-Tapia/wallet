import { ActionReducerMap } from '@ngrx/store';
import { IState } from 'src/app/shared/models/state.interface';
import { setGetActivosByIdReducer } from './lista-activos/store/activos-by-id.reducer';
import { setGetActivosReducer } from './lista-activos/store/activos.reducer';

export interface IFeaturesReducersMap {
	getActivos: IState<any>;
	getActivosById: IState<any>;
}

export const featuresReducersMap: ActionReducerMap<IFeaturesReducersMap> = {
	getActivos: setGetActivosReducer,
	getActivosById: setGetActivosByIdReducer,
};