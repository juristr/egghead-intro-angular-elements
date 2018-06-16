import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { GreeterComponent } from './greeter.component';

@NgModule({
  declarations: [GreeterComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [GreeterComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(GreeterComponent, { injector: injector });
    customElements.define('do-greet', el);
  }

  ngDoBootstrap() {}
}
