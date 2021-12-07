import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/shared/services/sidenav.service';
import { animateText, onSideNavChange } from '../../animations/animations';

@Component({
  selector: 'app-sidenav-bar',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.sass'],
  animations: [onSideNavChange, animateText],
})
export class SidenavBarComponent implements OnInit {
  public sideNavState: boolean = false;
  public linkText: boolean = false;

  navItems = [
    { name: 'Inicio', route: 'inicio', icon: 'home_outlined' },
    {
      name: 'Mi Billetera',
      route: 'detalles/activos',
      icon: 'account_balance_wallet',
    },
    { name: 'Pagos', route: 'detalles/movimientos', icon: 'attach_money' },
    {
      name: 'Transferencias',
      route: 'detalles/movimientos',
      icon: 'swap_vert',
    },
    { name: 'Ayuda', route: 'help', icon: 'info_outline' },
  ];

  usuario = { name: 'Username', id: '123456789' };

  constructor(private _sidenavService: SidenavService) {}

  ngOnInit() {}

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this._sidenavService.sideNavState$.next(this.sideNavState);
  }
}
