#!/bin/sh
<<<<<<< 18426c14bf9ce741e345bc9a671616d5d68fb1e4
ng build ngelements --prod --output-hashing=none --single-bundle true --keep-polyfills true
mv dist/ngelements/main.js demo/ngelements.js
mv dist/ngelements/polyfills.js demo
=======
# ng build ngelements --prod --output-hashing=none && cat dist/ngelements/runtime.js dist/ngelements/polyfills.js dist/ngelements/scripts.js dist/ngelements/main.js > demo/ngelements.js

ng build ngelements --prod --output-hashing none
mv dist/ngelements/main.js demo/ngelements.js
>>>>>>> avoid zone.js
