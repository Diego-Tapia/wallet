import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  activos: string;
  operacion: string;
  fecha: Date;
  monto: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    activos: 'ACT 1',
    operacion: 'Disminución',
    fecha: new Date(),
    monto: '(5.000)',
  },
  {
    activos: 'CRE 2',
    operacion: 'Inc. Individual',
    fecha: new Date(),
    monto: '100',
  },
  {
    activos: 'CRE 3',
    operacion: 'Incremento',
    fecha: new Date(),
    monto: '100.000',
  },
  {
    activos: 'CRE 4',
    operacion: 'Incremento',
    fecha: new Date(),
    monto: '8.500',
  },
  {
    activos: 'CRE 5',
    operacion: 'Disminución Individual',
    fecha: new Date(),
    monto: '(400)',
  },
];

@Component({
  selector: 'app-tabla-movimientos',
  templateUrl: './tabla-movimientos.component.html',
  styleUrls: ['./tabla-movimientos.component.sass'],
})
export class TablaMovimientosComponent implements OnInit {
  displayedColumns: string[] = ['activos', 'operacion', 'fecha', 'monto'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
