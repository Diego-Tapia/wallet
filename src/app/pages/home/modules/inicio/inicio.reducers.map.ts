import { ActionReducerMap } from '@ngrx/store';
import { IState } from 'src/app/shared/models/state.interface';
import { setGetNovedadesReducer } from './components/card-novedades/store/get-novedades.reducer';

export interface IInicioReducersMap {
    getNovedades: IState<any>
}

export const inicioReducersMap: ActionReducerMap<IInicioReducersMap> = {
    getNovedades: setGetNovedadesReducer
};
