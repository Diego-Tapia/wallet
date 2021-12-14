import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.sass'],
})
export class SubtitleComponent implements OnInit {
  constructor() { }

  @Input() subtitle!: string;
  @Input() textButton!: string;
  @Input() route!: string;

  @Output() newAction = new EventEmitter();

  ngOnInit(): void { }

  actionButton(): void {
    this.newAction.emit();
  }
}
