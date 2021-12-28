import { Component, OnInit } from '@angular/core';
import { IUserProfile } from 'src/app/shared/models/user-profile.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {

  public user!: IUserProfile | undefined;
  constructor(private authService: AuthService) {}

  total: number = 20755.6;

  ngOnInit(): void {
    this.user = this.authService.getUserData()?.userProfile;
  }

  onLogOut(): void {
    this.authService.logOut();
  }
}
