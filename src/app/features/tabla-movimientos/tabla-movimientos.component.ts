import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IState } from 'src/app/shared/models/state.interface';
import { ITransaction } from 'src/app/shared/models/transaction.interface';
import { ITransferenciaRes } from 'src/app/shared/models/transferencia.interface';
import { IFeaturesReducersMap } from '../features.reducers.map';
import { setGetTransactions, setGetTransactionsClear } from './store/get-transacciones.actions';

@Component({
  selector: 'app-tabla-movimientos',
  templateUrl: './tabla-movimientos.component.html',
  styleUrls: ['./tabla-movimientos.component.sass'],
})
export class TablaMovimientosComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  displayedColumns: string[] = ['token', 'transactionType', 'createdAt', 'amount'];
  transactions: ITransferenciaRes[] = []

  constructor(    
    private store: Store<{ featuresReducersMap: IFeaturesReducersMap }>
  ) {
    this.subscriptions.push(
      this.store.select('featuresReducersMap', 'getTransactions').subscribe((res: IState<any>) => {
        this.handleGetTransactions(res)
      })
    );
  }

  handleGetTransactions(res: IState<any>): void {
    if(res.success && res.response) this.transactions = res.response
  }

  ngOnInit(): void {
    this.store.dispatch(setGetTransactions())
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
    this.store.dispatch(setGetTransactionsClear())
  }
}
