import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SidenavaService {
  public sideNavState$: Subject<boolean> = new Subject();

  constructor() {}
}
