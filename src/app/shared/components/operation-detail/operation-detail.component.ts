import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  date: string;
  type: string;
  typet: number;
  description: string;
  credit: Number;
  total: number
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {type: 'DBI', date: '03/02/2021', typet: 1.0079, description: 'Detalle concepto decremento 1', credit: 6, total: 50},
  {type: 'PPA', date: '02/02/2021', typet: 4.0026, description: 'Detalle concepto decremento 2', credit: 5, total: 60},
  {type: 'PPA', date: '01/02/2021', typet: 6.941, description: 'Detalle concepto incremento ma...', credit: 5, total: 30},
  {type: 'DBI', date: '28/01/2021', typet: 9.0122, description: 'Detalle concepto incremento 1', credit: 5, total: 40},
  {type: 'PPA', date: '28/01/2021', typet: 10.811, description: 'Detalle concepto incremento 2', credit: 5, total:70}
];

@Component({
  selector: 'app-operation-detail',
  templateUrl: './operation-detail.component.html',
  styleUrls: ['./operation-detail.component.sass']
})
export class OperationDetailComponent implements OnInit {
  displayedColumns: string[] = ['type', 'date', 'typet', 'description', 'credit', 'total'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
