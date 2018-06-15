import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'do-greet',
  template: `
    <div>
      Hi, {{ name }}!
    </div>
  `,
  styles: []
})
export class GreeterComponent implements OnInit {
  @Input() name;

  constructor() {}

  ngOnInit() {}
}
