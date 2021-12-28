import { Component, OnInit } from '@angular/core';
import { IUserProfile } from 'src/app/shared/models/user-profile.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { onSideNavChange } from '../../animations/animations';

@Component({
  selector: 'app-sidenav-bar',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.sass'],
  animations: [onSideNavChange],
})
export class SidenavBarComponent implements OnInit {
  public sideNavState: boolean = false;
  public linkText: boolean = false;
  public user!: IUserProfile | undefined;

  navItems = [
    { name: 'Inicio', route: 'inicio', icon: 'home_outlined', available:true },
    { name: 'Mi Billetera', route: 'detalles/activos', icon: 'account_balance_wallet', available:true},
    { name: 'Pagos', route: '1', icon: 'attach_money', available:false },
    { name: 'Transferencias', route: 'transferencia', icon: 'swap_vert', available:true },
    { name: 'Ayuda', route: 'help', icon: 'info_outline', available:false },
  ];

  usuario = { name: 'Username', id: '123456789' };

  constructor(private authService: AuthService) {}


  ngOnInit() {
    this.user = this.authService.getUserData()?.userProfile
  }

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;

    if (this.sideNavState) {
      setTimeout(() => (this.linkText = this.sideNavState), 250);
    } else this.linkText = this.sideNavState;
  }
}
