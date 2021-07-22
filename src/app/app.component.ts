import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  deviceInfo!: DeviceInfo;

  title = 'front-backoffice';

  constructor(private deviceDetectorService: DeviceDetectorService){}

  ngOnInit(): void{
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo()
  }
}
