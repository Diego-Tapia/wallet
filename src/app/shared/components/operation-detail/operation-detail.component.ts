import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  date: string;
  type: string;
  typet: string;
  description: string;
  credit: Number;
  total: number
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {type: 'DBI', date: '03/02/2021', typet: 'Decremento Individual', description: 'Detalle concepto decremento 1', credit: (50), total: 50},
  {type: 'PPA', date: '02/02/2021', typet: 'Decremento Individual', description: 'Detalle concepto decremento 2', credit: (350), total: 100},
  {type: 'PPA', date: '01/02/2021', typet: 'Incremento Masivo', description: 'Detalle concepto incremento ma...', credit: 350, total: 450},
  {type: 'DBI', date: '28/01/2021', typet: 'Incremento Individual', description: 'Detalle concepto incremento 1', credit: 70, total: 100},
  {type: 'PPA', date: '28/01/2021', typet: 'Incremento Individual', description: 'Detalle concepto incremento 2', credit: 30, total:30}
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
