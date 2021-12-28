import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalService {
  constructor() { }
  public totalAmount = new BehaviorSubject(0);
}
