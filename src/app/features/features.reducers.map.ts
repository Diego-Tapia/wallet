import { ActionReducerMap } from '@ngrx/store';
import { IState } from 'src/app/shared/models/state.interface';
import { IApiResponse } from '../shared/models/api.interface';
import { ITransferenciaRes } from '../shared/models/transferencia.interface';
import { IUserProfile } from '../shared/models/user-profile.interface';
import { IWallet } from '../shared/models/wallet.interface';
import { setGetMisActivosReducer } from './lista-activos/store/get-mis-activos.reducer';
import { setTransferenciaReducer } from './modal-transferencia/store/transferencia/transferencia.reducer';
import { setVerifyUserReducer } from './modal-transferencia/store/verify-user/verify-user.reducer';
import { setGetTransactionsReducer } from './tabla-movimientos/store/get-transacciones.reducer';

export interface IFeaturesReducersMap {
	getMisActivos: IState<IApiResponse<IWallet> | null>;
	getTransactions: IState<ITransferenciaRes[] | null>;
	setTransferencia: IState<IApiResponse<ITransferenciaRes> | null>;
	verifyUser: IState<IUserProfile | null>;
}

export const featuresReducersMap: ActionReducerMap<IFeaturesReducersMap> = {
	getMisActivos: setGetMisActivosReducer,
	getTransactions: setGetTransactionsReducer,  
	setTransferencia: setTransferenciaReducer,
	verifyUser: setVerifyUserReducer
  
};