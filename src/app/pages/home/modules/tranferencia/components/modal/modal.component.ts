import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/shared/models/user.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
})
export class TransferenciasModalComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  user: IUser | undefined;
  ACTIVOS = [
    {
      id: 1,
      name: 'ACT1',
    },
    {
      id: 2,
      name: 'ACT2',
    },
    {
      id: 3,
      name: 'ACT3',
    },
  ];
  activoSelected = 'Seleccionar';
  today = new Date();
  step = 1;

  transferenciaForm = this.formBuilder.group({
    activo: ['', [Validators.required]],
    monto: ['', [Validators.required]],
    origen: ['', [Validators.required]],
    destinatario: ['', [Validators.required]],
    fecha: ['', [Validators.required]],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {},
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUserData()?.user;

    this.subscriptions.push(
      this.transferenciaForm.valueChanges.subscribe((res) => {
        console.log(res);
      }),
      this.transferenciaForm.controls['activo'].valueChanges.subscribe(
        (res) => {
          const activo = this.ACTIVOS.find((activo) => activo.id == res);
          if (activo) {
            this.activoSelected = activo.name;
          }
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onSubmit(): void {
    console.log('here');
    this.step = 2;
  }

  onSelectionChanged(name: string): void {
    this.activoSelected = name;
  }
}
