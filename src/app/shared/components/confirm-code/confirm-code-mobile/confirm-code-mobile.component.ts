import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmI } from '../models/confirm.interface';
import { ConfirmCodeService } from '../services/confirm-code.service';

@Component({
  selector: 'app-confirm-code-mobile',
  templateUrl: './confirm-code-mobile.component.html',
  styleUrls: ['./confirm-code-mobile.component.sass']
})
export class ConfirmCodeMobileComponent implements OnInit {

  constructor(private confirmcode: ConfirmCodeService) { }

  myForm = new FormGroup({
    username: new FormControl('', Validators.required),
    confirmationCode: new FormControl('', Validators.required),
});
  ngOnInit(): void {
  }
  confirm(form: ConfirmI){
    this.confirmcode.onConfirm(form).subscribe(data =>{
    console.log(data)
    });
    console.log()
 }
}
