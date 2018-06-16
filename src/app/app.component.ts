import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addGreeter() {
    const container = document.getElementById('container');
    container.innerHTML = '<do-greet>';
  }
}
