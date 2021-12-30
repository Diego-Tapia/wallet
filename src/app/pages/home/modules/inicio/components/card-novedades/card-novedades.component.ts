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
      title: 'Horarios de atención',
      text: 'Lunes a Viernes de 7:00 a 17:00 hs.',
      imgSrc: '../../../assets/images/caja-resistencia-novedades00.png'
    },
    {
      title: 'Comercios adheridos',
      text: 'Consultá donde utilizar tus Benetickets Ciudad.',
      imgSrc: '../../../assets/images/caja-resistencia-novedades01.png'
    },
    {
      title: 'Descargá la app',
      text: 'Aboná tributos municipales en tu celular.',
      imgSrc: '../../../assets/images/caja-resistencia-novedades02.png'
    },
    {
      title: 'Cuotas sin interés',
      text: 'Hasta 6 cuotas sin interés con TUYA.',
      imgSrc: '../../../assets/images/caja-resistencia-novedades03.png'
    },
  ];

  constructor(
    private store: Store<{ inicioReducersMap: IInicioReducersMap }>
  ) {
    this.store.select('inicioReducersMap', 'getNovedades').subscribe((res: IState<any>) => {
      // console.log(res);
    })
  }

  ngOnInit(): void {
    // this.store.dispatch(setGetNovedades())
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe)
    this.store.dispatch(setGetNovedadesClear())
  }
}
