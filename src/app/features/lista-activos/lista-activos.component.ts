import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IActivo } from 'src/app/shared/models/activo.interface';
import { IState } from 'src/app/shared/models/state.interface';
import { IFeaturesReducersMap } from '../features.reducers.map';
import { setGetActivos, setGetActivosClear } from './store/activos.actions';

@Component({
  selector: 'app-lista-activos',
  templateUrl: './lista-activos.component.html',
  styleUrls: ['./lista-activos.component.sass'],
})
export class ListaActivosComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  activos: IActivo[] = [
    {
      shortName: 'BENETICKET',
      symbol: 'BNT',
      price: 15000,
      money: 'BENET',
    },
    {
      shortName: 'BENETICKET',
      symbol: 'BNT',
      price: 15000,
      money: 'BENET',
    },
    {
      shortName: 'BENETICKET',
      symbol: 'BNT',
      price: 15000,
      money: 'BENET',
    },
    {
      shortName: 'BENETICKET',
      symbol: 'BNT',
      price: 15000,
      money: 'BENET',
    },
    {
      shortName: 'BENETICKET',
      symbol: 'BNT',
      price: 15000,
      money: 'BENET',
    },
    {
      shortName: 'BENETICKET',
      symbol: 'BNT',
      price: 15000,
      money: 'BENET',
    },
  ];

  @Input() displayButton!: boolean;

  constructor(
    private store: Store<{ featuresReducersMap: IFeaturesReducersMap }>
  ) {
    this.subscriptions.push(
      this.store.select('featuresReducersMap', 'getActivos').subscribe((res: IState<IActivo[]>) => {
        console.log(res);
      })
    );
  }

  ngOnInit(): void {
    this.store.dispatch(setGetActivos());
    if (!this.displayButton) {
      this.activos = this.activos.slice(0, 3);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
    this.store.dispatch(setGetActivosClear());
  }
}
