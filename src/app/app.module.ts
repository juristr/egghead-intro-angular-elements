import { Injector, NgModule, ApplicationRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackFormComponent } from './feedback-form.component';
import { interval } from 'rxjs';
import { DisplayComponent } from './display/display.component';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  declarations: [FeedbackFormComponent, DisplayComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  providers: [],
  entryComponents: [FeedbackFormComponent, DisplayComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(FeedbackFormComponent, {
      injector: this.injector
    });
    customElements.define('feedback-form', el);

    const displayEl = createCustomElement(DisplayComponent, {
      injector: this.injector
    });
    customElements.define('display-cmp', displayEl);
  }
}
