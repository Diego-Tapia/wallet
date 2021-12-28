import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { NotificationsService } from 'angular2-notifications';
import { Subscription } from 'rxjs';
import { setGetActivos, setGetActivosClear } from 'src/app/features/lista-activos/store/activos.actions';
import { IActivo } from 'src/app/shared/models/activo.interface';
import { IState } from 'src/app/shared/models/state.interface';
import { ITransferenciaRes } from 'src/app/shared/models/transferencia.interface';
import { IUserProfile } from 'src/app/shared/models/user-profile.interface';
import { IBalances, IWallet } from 'src/app/shared/models/wallet.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { setTransferencia } from '../../store/transferencias.action';
import { setVerifyUser, setVerifyUserClear } from '../../store/verify-user/verify-user.action';
import { ITransferenciasMap } from '../../transferencia-reducer.map';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
})
export class TransferenciasModalComponent implements OnInit, OnDestroy {
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
    notes: [' ', [Validators.required]]
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IActivo | null,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private noti: NotificationsService,
    private store: Store<{ TransferenciasReducerMap: ITransferenciasMap }>
    ) {
      this.subscriptions.push(
        this.store.select('TransferenciasReducerMap', 'getActivos').subscribe((res: IState<any>) => {
          this.handleGetActivos(res)
        }),
        this.store.select('TransferenciasReducerMap', 'verifyUser').subscribe((res: IState<any>) => {
          this.handleVerifyUser(res)
        }),
        this.store.select('TransferenciasReducerMap', 'setTransferencia').subscribe((res: IState<any>) => {
          this.handleSetTransferencia(res)
        }),
      );
    }

  ngOnInit(): void {  
    this.user = this.authService.getUserData()?.userProfile;
    this.store.dispatch(setGetActivos());
    this.subscriptions.push(
      this.transferenciaForm.controls['token'].valueChanges.subscribe((res) => {
          const activo = this.balances.find((balance) => balance.tokenId._id == res);
          if (activo) this.activoSelected = activo.tokenId.symbol;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.store.dispatch(setGetActivosClear());
    this.store.dispatch(setVerifyUserClear());
  }

  handleGetActivos(res: IState<any>): void {    
    if(res.error) this.noti.error('Error', res.error.error.message)
    if(res.success && res.response) {
      this.wallet = res.response.data
      this.balances = this.wallet.balances
    } 
  }

  handleVerifyUser(res: IState<any>): void {
    if (res.error) {
			if(res.error.status === 404) this.noti.error('Error', 'No se encontró ningun usuario con esa identificación');
			else this.noti.error('Error', res.error.error.message);
      this.verified = false
		} 
		if (res.success && res.response) {
			this.verified = true
      this.userTo = res.response
		} 
  }

  handleSetTransferencia(res: IState<any>): void {
    if (res.error)  this.noti.error('Error', 'No se encontró ningun usuario con esa identificación');
		if (res.success && res.response) {
			this.transactionRes = res.response.data
      this.step = 2;
		} 
  }

  onVerifyUser(): void {    
    this.store.dispatch(setVerifyUser({userIdentifier: this.transferenciaForm.value.userIdentifier}));
  }

  onSubmit(): void {
    if(this.transferenciaForm.valid) this.store.dispatch(setTransferencia({form: this.transferenciaForm.value}));    
  }

  onSelectionChanged(name: string): void {
    this.activoSelected = name;
  }
}