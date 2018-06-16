import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter.component';

@NgModule({
  declarations: [AppComponent, GreeterComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [GreeterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(GreeterComponent, { injector: injector });
    customElements.define('do-greet', el);
  }
}
