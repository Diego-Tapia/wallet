import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass'],
})
export class TitleComponent implements OnInit {
  constructor() { }

  @Input() title!: string;
  @Input() textButton!: string;
  @Input() route!: string;

  @Output() newAction = new EventEmitter();

  ngOnInit(): void { }

  actionButton(): void {
    this.newAction.emit();
  }
}
