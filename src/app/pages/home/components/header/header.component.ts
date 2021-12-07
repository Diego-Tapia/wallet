import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  total: number = 20755.6;

  ngOnInit(): void {}

  onLogOut(): void {
    console.log('logout');
  }
}
