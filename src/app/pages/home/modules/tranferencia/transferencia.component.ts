import { Component, OnInit, Input } from '@angular/core';
import { ITransaction } from 'src/app/shared/models/transaction.interface';
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

  constructor() {}

  ngOnInit(): void {
    if (!this.displayButton) {
      this.transaction = this.transaction.slice(0, 6);
    }
  }
  openModalTransference(): void {}
}
