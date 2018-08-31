import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ElementRef,
  Attribute,
  AfterContentInit,
  ChangeDetectorRef
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm: FormGroup;
  _name;

  @Input()
  set name(val) {
    this._name = val;

    this.feedbackForm.patchValue({
      name: val
    });
  }
  get name() {
    return this._name;
  }

  @Output()
  feedbackSubmit = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      name: new FormControl(this.name),
      feedback: new FormControl('')
    });
  }

  onSubmit({ value, valid }) {
    if (valid) {
      this.feedbackSubmit.next(value);
    }
  }
}
