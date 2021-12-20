import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { LoaderService } from './shared/loader/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  deviceInfo!: DeviceInfo;
  isLoading = true;

  title = 'front-backoffice';

  constructor(
    private deviceDetectorService: DeviceDetectorService,
    private loaderService: LoaderService
  ) {
    this.loaderService.isLoading.subscribe((res) => {
      this.isLoading = res;
    });
  }

  ngOnInit(): void {
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
  }
}
