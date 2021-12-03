import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass'],
})
export class TitleComponent implements OnInit {
  @Input() title!: string;
  @Input() textButton!: string;
  @Input() showButton!: boolean;
  constructor() {}

  @Output() newAction = new EventEmitter();

  ngOnInit(): void {}

  actionButton(): void {
    this.newAction.emit();
  }
}
