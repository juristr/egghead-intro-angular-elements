import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // selector: 'do-greet',
  template: `
    <div>Hi, {{ name }}!</div>
    <button (click)="doGreet()">Greet</button>
  `,
  styles: []
})
export class GreeterComponent implements OnInit {
  @Input() name;
  @Output() greet = new EventEmitter();

  constructor() {}

  doGreet() {
    this.greet.emit(`Hi, ${this.name}`);
  }

  ngOnInit() {}
}
