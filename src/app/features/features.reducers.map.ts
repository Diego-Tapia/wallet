import { ActionReducerMap } from '@ngrx/store';
import { IState } from 'src/app/shared/models/state.interface';
import { setGetActivosByIdReducer } from './lista-activos/store/activos-by-id.reducer';
import { setGetActivosReducer } from './lista-activos/store/activos.reducer';
import { setTransferenciaReducer } from './modal-transferencia/store/transferencia/transferencia.reducer';
import { setVerifyUserReducer } from './modal-transferencia/store/verify-user/verify-user.reducer';
import { setGetTransactionsReducer } from './tabla-movimientos/store/get-transacciones.reducer';

export interface IFeaturesReducersMap {
	getActivos: IState<any>;
	getActivosById: IState<any>;
	getTransactions: IState<any>;
	setTransferencia: IState<any>;
	verifyUser: IState<any>;
}

export const featuresReducersMap: ActionReducerMap<IFeaturesReducersMap> = {
	getActivos: setGetActivosReducer,
	getActivosById: setGetActivosByIdReducer,
	getTransactions: setGetTransactionsReducer,  
	setTransferencia: setTransferenciaReducer,
	verifyUser: setVerifyUserReducer
  
};