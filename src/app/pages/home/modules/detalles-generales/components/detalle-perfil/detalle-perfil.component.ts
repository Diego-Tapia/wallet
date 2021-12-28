import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IState } from 'src/app/shared/models/state.interface';
import { IUserProfile } from 'src/app/shared/models/user-profile.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { IDetallesGeneralesReducersMap } from '../../det-generales.reducers.map';
import { setGetUsuario, setGetUsuarioClear } from './store/get-usuario.actions';

@Component({
  selector: 'app-detalle-perfil',
  templateUrl: './detalle-perfil.component.html',
  styleUrls: ['./detalle-perfil.component.sass'],
})
export class DetallePerfilComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  public user!: IUserProfile | undefined;
  
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
    private authService: AuthService,
    private store: Store<{ detallesGeneralesReducersMap: IDetallesGeneralesReducersMap }>
  ) {
    this.subscriptions.push(
      this.store.select('detallesGeneralesReducersMap', 'getUsuario').subscribe((res: IState<any>) => {
        // console.log(res);
      })
    );
  }

  ngOnInit(): void {
    this.user = this.authService.getUserData()?.userProfile
    this.store.dispatch(setGetUsuario());
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => subs.unsubscribe());
    this.store.dispatch(setGetUsuarioClear());
  }
}
