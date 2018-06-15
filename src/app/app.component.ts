import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() name;

  @Output() greet = new EventEmitter();

  doGreet() {
    this.greet.emit(`Hi, ${this.name}!`);
  }
}
