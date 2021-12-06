import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-novedades',
  templateUrl: './card-novedades.component.html',
  styleUrls: ['./card-novedades.component.sass'],
})
export class CardNovedadesComponent implements OnInit {
  novedades = [
    {
      title: 'Title1',
      text: 'Lorem ipsum dolor sit amet, consectetur ',
    },
    {
      title: 'Title2',
      text: 'Lorem ipsum dolor sit amet, consectetur ',
    },
    {
      title: 'Title3',
      text: 'Lorem ipsum dolor sit amet, consectetur ',
    },
    {
      title: 'Title3',
      text: 'Lorem ipsum dolor sit amet, consectetur ',
    },
    {
      title: 'Title3',
      text: 'Lorem ipsum dolor sit amet, consectetur ',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
