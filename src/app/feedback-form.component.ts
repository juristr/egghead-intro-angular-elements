import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ShareService } from './share.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm: FormGroup;
  @Input()
  name;
  @Output()
  feedbackSubmit = new EventEmitter();

  constructor(private shareService: ShareService) {}

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      name: new FormControl(this.name),
      feedback: new FormControl('')
    });
  }

  onSubmit({ value, valid }) {
    if (valid) {
      this.feedbackSubmit.next(value);
      this.shareService.name = value.name;
    }
  }
}
