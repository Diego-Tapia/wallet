import { ActionReducerMap } from '@ngrx/store';
import { IState } from 'src/app/shared/models/state.interface';
import { IUser } from 'src/app/shared/models/user.interface';
import { setGetUsuarioReducer } from './components/detalle-perfil/store/get-usuario.reducer';


export interface IDetallesGeneralesReducersMap {
    getUsuario: IState<any>
}

export const detallesGeneralesReducersMap: ActionReducerMap<IDetallesGeneralesReducersMap> = {
    getUsuario: setGetUsuarioReducer
};
