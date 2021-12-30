import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Notification, NotificationsService } from 'angular2-notifications';
import { Subscription } from 'rxjs';
import { IActivo } from 'src/app/shared/models/activo.interface';
import { IApiResponse } from 'src/app/shared/models/api.interface';
import { IState } from 'src/app/shared/models/state.interface';
import { ITransferenciaRes } from 'src/app/shared/models/transferencia.interface';
import { IUserProfile } from 'src/app/shared/models/user-profile.interface';
import { IBalances, IWallet } from 'src/app/shared/models/wallet.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { IFeaturesReducersMap } from '../features.reducers.map';
import { setGetMisActivos, setGetMisActivosClear } from '../lista-activos/store/get-mis-activos.actions';
import { setTransferencia, setTransferenciaClear } from './store/transferencia/transferencias.action';
import { setVerifyUser, setVerifyUserClear } from './store/verify-user/verify-user.action';

@Component({
  selector: 'app-modal-transferencia',
  templateUrl: './modal-transferencia.component.html',
  styleUrls: ['./modal-transferencia.component.sass'],
})
export class ModalTransferenciaComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  user: IUserProfile | undefined;
  wallet!: IWallet;
  balances!: IBalances[];
  verified: boolean = false;
  userTo!: IUserProfile
  transactionRes!: ITransferenciaRes

  activoSelected = 'Seleccionar';
  today = new Date();
  step = 1;

  transferenciaForm = this.formBuilder.group({
    token: ['', [Validators.required]],
    amount: ['', [Validators.required]],
    userIdentifier: ['', [Validators.required]],
    notes: [' ']
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IActivo | null,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private noti: NotificationsService,
    private store: Store<{ featuresReducersMap: IFeaturesReducersMap }>
    ) {
      this.subscriptions.push(
        this.store.select('featuresReducersMap', 'getMisActivos').subscribe((res: IState<IApiResponse<IWallet> | null>) => {
          this.handleGetActivos(res)
        }),
        this.store.select('featuresReducersMap', 'verifyUser').subscribe((res: IState<IUserProfile | null>) => {
          this.handleVerifyUser(res)
        }),
        this.store.select('featuresReducersMap', 'setTransferencia').subscribe((res: IState<IApiResponse<ITransferenciaRes> | null>) => {
          this.handleSetTransferencia(res)
        }),
      );
    }

  ngOnInit(): void {       
    this.user = this.authService.getUserData()?.user;
    this.store.dispatch(setGetMisActivos());
    this.subscriptions.push(
      this.transferenciaForm.controls['token'].valueChanges.subscribe((res) => {
        const activo = this.balances.find((balance) => balance.tokenId._id == res);
        if (activo) this.activoSelected = activo.tokenId.symbol;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.store.dispatch(setTransferenciaClear());
    this.store.dispatch(setGetMisActivosClear());
    this.store.dispatch(setVerifyUserClear());
  }

  handleGetActivos(res: IState<IApiResponse<IWallet> | null>): void {    
    if(res.error) this.noti.error('Error', res.error.error.message)
    if(res.success && res.response) {
      this.balances = res.response.data.balances
      if(this.data) {
        const activo = this.balances.find((balance) => balance.tokenId._id == this.data?._id)
        if(activo) this.transferenciaForm.patchValue({ token: activo.tokenId._id })
      }
    } 
  }

  handleVerifyUser(res: IState<IUserProfile | null>): void {
    if (res.error) {
		  this.noti.error('Error', res.error.error.message);
      this.verified = false
		} 
		if (res.success && res.response) {
			this.verified = true
      this.userTo = res.response
		} 
  }

  handleSetTransferencia(res: IState<IApiResponse<ITransferenciaRes> | null>): void {
    if (res.error) { 
      this.noti.error('Error', res.error.error.message);
      this.step = 3
    }
		if (res.success && res.response) {
			this.transactionRes = res.response.data
      this.step = 2;
		} 
  }

  onVerifyUser(): void | Notification {
    const userIdentifier = this.transferenciaForm.value.userIdentifier
    if(userIdentifier == this.user?.cuil || userIdentifier == this.user?.dni ||
      userIdentifier == this.user?.userId.customId || userIdentifier == this.user?.userId.username) 
    return this.noti.error('Error','Las billeteras de origen y destino no pueden ser iguales')
    else this.store.dispatch(setVerifyUser({userIdentifier: this.transferenciaForm.value.userIdentifier}));
  }

  onSubmit(): void | Notification {
    if(!this.transferenciaForm.valid) return this.noti.error('Error','Faltan completar campos para la transferencia')
    return this.store.dispatch(setTransferencia({form: this.transferenciaForm.value}));    
  }
  
  verComprobante(): void { this.step = 4;}

  onSelectionChanged(name: string): void {
    this.activoSelected = name;
  }
}
