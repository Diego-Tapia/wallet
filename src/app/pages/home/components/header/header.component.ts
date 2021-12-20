import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  total: number = 20755.6;

  ngOnInit(): void {}

  onLogOut(): void {
    this.authService.logOut();
  }
}
