import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalTransferenciaComponent } from 'src/app/features/modal-transferencia/modal-transferencia.component';
import { ITransaction } from 'src/app/shared/models/transaction.interface';
import { IUserProfile } from 'src/app/shared/models/user-profile.interface';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.sass'],
})
export class TransferenciaComponent implements OnInit {
  transaction: ITransaction[] = [
    {
      title: 'Nombre 1',
      subtitle: 'ID/CUIL',
    },
    {
      title: 'Nombre 2',
      subtitle: 'ID/CUIL',
    },
    {
      title: 'Nombre 3',
      subtitle: 'ID/CUIL',
    },
    {
      title: 'Nombre 4',
      subtitle: 'ID/CUIL',
    },
  ];
  @Input() displayButton!: boolean;

  constructor(
    public dialog: MatDialog,
    ) {}

  ngOnInit(): void {
  }

  openDialog(data:IUserProfile | null) {
    this.dialog.open(ModalTransferenciaComponent, {
      data,
      closeOnNavigation: true,
      height: '100%',
      width: '500px',
      panelClass: '',
      position: { right: '0%' },
    });
  }
}
