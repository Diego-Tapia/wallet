import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IState } from 'src/app/shared/models/state.interface';
import { ITransferenciaRes } from 'src/app/shared/models/transferencia.interface';
import { IUserProfile } from 'src/app/shared/models/user-profile.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { IFeaturesReducersMap } from '../features.reducers.map';
import { setGetTransactions, setGetTransactionsClear } from './store/get-transacciones.actions';

@Component({
  selector: 'app-tabla-movimientos',
  templateUrl: './tabla-movimientos.component.html',
  styleUrls: ['./tabla-movimientos.component.sass'],
})
export class TablaMovimientosComponent implements OnInit, OnDestroy, AfterViewInit {
  subscriptions: Subscription[] = [];
  displayedColumns: string[] = ['token', 'transactionType', 'createdAt', 'amount'];
  dataSource = new MatTableDataSource<ITransferenciaRes>();
  user!: IUserProfile | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private auth: AuthService,    
    private store: Store<{ featuresReducersMap: IFeaturesReducersMap }>
  ) {
    this.subscriptions.push(
      this.store.select('featuresReducersMap', 'getTransactions').subscribe((res: IState<ITransferenciaRes[]>) => {
        this.handleGetTransactions(res)
      })
    );
  }

  handleGetTransactions(res: IState<ITransferenciaRes[]>): void {
    if(res.success && res.response) {
      this.dataSource.data = res.response
    }
  }

  ngOnInit(): void {
    this.user = this.auth.getUserData()?.userProfile
    this.store.dispatch(setGetTransactions())
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
    this.store.dispatch(setGetTransactionsClear())
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
