import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
<<<<<<< 18426c14bf9ce741e345bc9a671616d5d68fb1e4
  .bootstrapModule(AppModule)
=======
  .bootstrapModule(AppModule, { ngZone: 'noop' })
>>>>>>> avoid zone.js
  .catch(err => console.log(err));
