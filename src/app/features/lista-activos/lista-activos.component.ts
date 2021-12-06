import { Component, Input, OnInit } from '@angular/core';
import { IActivo } from 'src/app/shared/models/activo.interface';

@Component({
  selector: 'app-lista-activos',
  templateUrl: './lista-activos.component.html',
  styleUrls: ['./lista-activos.component.sass'],
})
export class ListaActivosComponent implements OnInit {
  activos: IActivo[] = [
    {
      shortName: 'BENETICKET',
      symbol: 'BNT',
      price: 15000,
      money: 'BENET',
    },
    {
      shortName: 'BENETICKET',
      symbol: 'BNT',
      price: 15000,
      money: 'BENET',
    },
    {
      shortName: 'BENETICKET',
      symbol: 'BNT',
      price: 15000,
      money: 'BENET',
    },
    {
      shortName: 'BENETICKET',
      symbol: 'BNT',
      price: 15000,
      money: 'BENET',
    },
    {
      shortName: 'BENETICKET',
      symbol: 'BNT',
      price: 15000,
      money: 'BENET',
    },
    {
      shortName: 'BENETICKET',
      symbol: 'BNT',
      price: 15000,
      money: 'BENET',
    },
  ];

  @Input() displayButton!: boolean;

  constructor() {}

  ngOnInit(): void {
    if (!this.displayButton) {
      this.activos = this.activos.slice(0, 3);
    }
  }
}
