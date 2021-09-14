import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmI } from '../models/confirm.interface';
import { ConfirmCodeService } from '../services/confirm-code.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-confirm-code-desk',
  templateUrl: './confirm-code-desk.component.html',
  styleUrls: ['./confirm-code-desk.component.sass']
})
export class ConfirmCodeDeskComponent implements OnInit {

  constructor(
    private confirmateCode: ConfirmCodeService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
  myForm = new FormGroup({
    username: new FormControl('', Validators.required),
    confirmCode: new FormControl('', Validators.required),
});
  ngOnInit(): void {
  }
 confirm(form: ConfirmI){
  this.confirmateCode.onConfirm(form).subscribe(
    data => data,
    error => {
      if(error.status === 201){
        this.router.navigate(['/']);
      }if(error.status === 500){
        this.router.navigate(['/']);
      }
    }
  )}
}
