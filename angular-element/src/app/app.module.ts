import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ApplicationRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { FeedbackFormComponent } from './feedback-form.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { interval } from 'rxjs';

const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  declarations: [AppComponent, FeedbackFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  providers: [],
  entryComponents: [FeedbackFormComponent]
  // bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(FeedbackFormComponent, {
      injector: injector
    });
    customElements.define('feedback-form', el);
  }

  ngDoBootstrap() {}
}
