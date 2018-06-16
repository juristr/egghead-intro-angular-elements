import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Angular Elements</h1>
  <button (click)="addGreeter()">Add greeter</button>
  <div id="container"></div>
  `
})
export class AppComponent {
  addGreeter() {
    const container = document.getElementById('container');
    container.innerHTML = '<do-greet>';
  }
}
