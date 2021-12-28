import { ActionReducerMap } from '@ngrx/store';
import { setGetActivosReducer } from 'src/app/features/lista-activos/store/activos.reducer';
import { IState } from 'src/app/shared/models/state.interface';
import { setTransferenciaReducer } from './store/transferencia.reducer';
import { setVerifyUserReducer } from './store/verify-user/verify-user.reducer';

export interface ITransferenciasMap {
  setTransferencia: IState<any>;
  getActivos: IState<any>;
  verifyUser: IState<any>;
}

export const TransferenciasReducerMap: ActionReducerMap<ITransferenciasMap> = {
  setTransferencia: setTransferenciaReducer,
  getActivos: setGetActivosReducer,
  verifyUser: setVerifyUserReducer
};
