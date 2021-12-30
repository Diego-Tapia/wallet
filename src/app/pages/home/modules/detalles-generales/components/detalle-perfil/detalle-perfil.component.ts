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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUserData()?.user
  }

  ngOnDestroy(): void {
  }
}
