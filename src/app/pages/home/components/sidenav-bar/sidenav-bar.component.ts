import { Component, OnInit } from '@angular/core';
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

  navItems = [
    { name: 'Inicio', route: 'inicio', icon: 'home_outlined' },
    {
      name: 'Mi Billetera',
      route: 'detalles/activos',
      icon: 'account_balance_wallet',
    },
    { name: 'Pagos', route: '1', icon: 'attach_money' },
    {
      name: 'Transferencias',
      route: 'transferencia',
      icon: 'swap_vert',
    },
    { name: 'Ayuda', route: 'help', icon: 'info_outline' },
  ];

  usuario = { name: 'Username', id: '123456789' };

  constructor() {}

  ngOnInit() {}

  onSinenavToggle() {
    this.sideNavState = !this.sideNavState;

    if (this.sideNavState) {
      setTimeout(() => (this.linkText = this.sideNavState), 250);
    } else this.linkText = this.sideNavState;
  }
}
