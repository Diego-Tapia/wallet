import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
})
export class ModalComponent implements OnInit {
  transferenciaForm = this.formBuilder.group({
    activo: ['', [Validators.required]],
    monto: ['', [Validators.required]],
    origen: ['', [Validators.required]],
    destinatario: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {},
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {}
}
