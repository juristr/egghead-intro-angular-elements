import { NgModule, Injector } from '@angular/core';
<<<<<<< 76c8bb4dfbd18914edcdcee061040dfda68c0c46
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
=======
import { createCustomElement } from '@angular/elements';

>>>>>>> custom build works
import { GreeterComponent } from './greeter.component';
import { createCustomElement } from '@angular/elements';

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
