import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IActivo } from 'src/app/shared/models/activo.interface';
import { ITransaction } from 'src/app/shared/models/transaction.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { TransferenciasModalComponent } from './components/modal/modal.component';
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

  openDialog(data:IActivo | null) {
    const dialogRef = this.dialog.open(TransferenciasModalComponent, {
      data,
      closeOnNavigation: true,
      height: '100%',
      width: '500px',
      panelClass: '',
      position: { right: '0%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}
