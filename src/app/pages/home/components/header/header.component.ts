import { Component, OnInit } from '@angular/core';
import { IUserProfile } from 'src/app/shared/models/user-profile.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { TotalService } from 'src/app/shared/services/total/total.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {

  public hide: boolean = true;
  public total!: number;
  public user!: IUserProfile | undefined;
  constructor(
    private authService: AuthService,
    private totalService: TotalService
  ) {}


  ngOnInit(): void {
    this.user = this.authService.getUserData()?.userProfile;
    this.totalService.totalAmount.subscribe(res => {
      this.total = res
    })
  }

  onLogOut(): void {
    this.authService.logOut();
  }
}
