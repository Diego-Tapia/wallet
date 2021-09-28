import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DataCardService } from '../services/data-card.service';
import { Cards } from '../models/cards';

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
  selector: 'app-home-desk',
  templateUrl: './home-desk.component.html',
  styleUrls: ['./home-desk.component.sass']
})
export class HomeDeskComponent implements OnInit {
  displayedColumns: string[] = ['type', 'date', 'typet', 'description', 'credit', 'total'];
  dataSource = ELEMENT_DATA;

  dataCards!: Cards[]; 

  constructor(public dialog: MatDialog,
              public dataCard: DataCardService) { }
  /*openDialog() {
    const dialogRef = this.dialog.open(TransferTokensDeskComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }*/
  ngOnInit(): void {
    this.getBalances();
  }

  getBalances():void{
    this.dataCard.getCards().subscribe(data=>{
      this.dataCards = data;
      console.log(data)
    })
  }
}
