import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IState } from 'src/app/shared/models/state.interface';
import { IUser } from 'src/app/shared/models/user.interface';
import { IDetallesGeneralesReducersMap } from '../../det-generales.reducers.map';
import { setGetUsuario, setGetUsuarioClear } from './store/get-usuario.actions';

@Component({
  selector: 'app-detalle-perfil',
  templateUrl: './detalle-perfil.component.html',
  styleUrls: ['./detalle-perfil.component.sass'],
})
export class DetallePerfilComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  usuario = {
    firstName: 'Mariano Alejandro',
    lastName: 'Bustos Rodriguez',
    username: '@marianbrod',
    dni: '36666666',
    cuil: '27-36666666-6',
    telefono: '35124865791',
    email: 'marianbrod@cliente.com.ar',
  };

  representados = [
    {
      nombre: 'Representado 1',
      cuil: '20-30118548-7',
    },
    {
      nombre: 'Representado 2',
      cuil: '20-30118548-7',
    },
    {
      nombre: 'Representado 3',
      cuil: '20-30118548-7',
    },
  ];

  constructor(
    private store: Store<{ detallesGeneralesReducersMap: IDetallesGeneralesReducersMap }>
  ) {
    this.subscriptions.push(
      this.store.select('detallesGeneralesReducersMap', 'getUsuario').subscribe((res: IState<IUser[]>) => {
        console.log(res);
      })
    );
  }

  ngOnInit(): void {
    this.store.dispatch(setGetUsuario());
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
    this.store.dispatch(setGetUsuarioClear());
  }
}
