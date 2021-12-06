import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-perfil',
  templateUrl: './detalle-perfil.component.html',
  styleUrls: ['./detalle-perfil.component.sass'],
})
export class DetallePerfilComponent implements OnInit {
  usuario = {
    firstName: 'Martin Ignacio',
    lastName: 'Perez Arias',
    username: '@marianbrod',
    dni: '36666666',
    cuil: '27-36666666-6',
    telefono: '35124865791',
    email: 'marianbrod@cliente.com.ar',
  };

  representados = [
    {
      nombre: 'Representado 1',
      cuil: '20-30118548-7',
    },
    {
      nombre: 'Representado 2',
      cuil: '20-30118548-7',
    },
    {
      nombre: 'Representado 3',
      cuil: '20-30118548-7',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
