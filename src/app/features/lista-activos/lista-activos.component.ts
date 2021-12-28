import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationsService } from 'angular2-notifications';
import { Subscription } from 'rxjs';
import { IState } from 'src/app/shared/models/state.interface';
import { IWallet } from 'src/app/shared/models/wallet.interface';
import { TotalService } from 'src/app/shared/services/total/total.service';
import { IFeaturesReducersMap } from '../features.reducers.map';
import { setGetActivos, setGetActivosClear } from './store/activos.actions';

@Component({
  selector: 'app-lista-activos',
  templateUrl: './lista-activos.component.html',
  styleUrls: ['./lista-activos.component.sass'],
})
export class ListaActivosComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  wallet!: IWallet;

  @Input() displayButton: boolean = false;

  constructor(
    private noti: NotificationsService,
    private totalService: TotalService,
    private store: Store<{ featuresReducersMap: IFeaturesReducersMap }>
  ) {
    this.subscriptions.push(
      this.store.select('featuresReducersMap', 'getActivos').subscribe((res: IState<any>) => {
        this.handleGetActivos(res)
      })
    );
  }

  ngOnInit(): void {
    this.store.dispatch(setGetActivos());
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
    this.store.dispatch(setGetActivosClear());
  }

  handleGetActivos(res: IState<any>): void {    
    if(res.error) this.noti.error('Error', res.error.error.message)
    if(res.success && res.response) {
      this.wallet = res.response.data
      this.totalService.totalAmount.next(this.wallet.total)
    } 
  }
}
