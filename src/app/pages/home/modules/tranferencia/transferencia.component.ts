import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ITransaction } from 'src/app/shared/models/transaction.interface';
import { ModalComponent } from './components/modal/modal.component';
@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.sass'],
})
export class TransferenciaComponent implements OnInit {
  transaction: ITransaction[] = [
    {
      title: 'Nombre destinatario',
      subtitle: 'ID/CUIL',
    },
    {
      title: 'Nombre destinatario',
      subtitle: 'ID/CUIL',
    },
    {
      title: 'Nombre destinatario',
      subtitle: 'ID/CUIL',
    },
    {
      title: 'Nombre destinatario',
      subtitle: 'ID/CUIL',
    },
  ];
  @Input() displayButton!: boolean;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    if (!this.displayButton) {
      this.transaction = this.transaction.slice(0, 6);
    }
  }
  openModalTransference(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {},
      closeOnNavigation: true,
      height: '100%',
      width: '500px',
      panelClass: '',
      position: { right: '0%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
