import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hi</h1>

    <feedback-form></feedback-form>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
