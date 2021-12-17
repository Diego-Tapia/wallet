import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IState } from 'src/app/shared/models/state.interface';
import { IInicioReducersMap } from '../../inicio.reducers.map';
import { setGetNovedades, setGetNovedadesClear } from './store/get-novedades.actions';

@Component({
  selector: 'app-card-novedades',
  templateUrl: './card-novedades.component.html',
  styleUrls: ['./card-novedades.component.sass'],
})
export class CardNovedadesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = []
  novedades = [
    {
      title: 'Title1',
      text: 'Lorem ipsum dolor sit amet, consectetur ',
    },
    {
      title: 'Title2',
      text: 'Lorem ipsum dolor sit amet, consectetur ',
    },
    {
      title: 'Title3',
      text: 'Lorem ipsum dolor sit amet, consectetur ',
    },
    {
      title: 'Title3',
      text: 'Lorem ipsum dolor sit amet, consectetur ',
    },
    {
      title: 'Title3',
      text: 'Lorem ipsum dolor sit amet, consectetur ',
    },
  ];

  constructor(
    private store: Store<{ inicioReducersMap: IInicioReducersMap }>
  ) {
    this.store.select('inicioReducersMap', 'getNovedades').subscribe((res: IState<any>) => {
      console.log(res);
    })
  }

  ngOnInit(): void {
    this.store.dispatch(setGetNovedades())
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe)
    this.store.dispatch(setGetNovedadesClear())
  }
}
