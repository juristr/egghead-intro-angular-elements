#!/bin/sh
ng build ngelements --prod --output-hashing=none && cat dist/ngelements/runtime.js dist/ngelements/polyfills.js dist/ngelements/scripts.js dist/ngelements/main.js > demo/ngelements.js

# ng build ngelements --prod --output-hashing none
cp demo/ngelements.js ../my-angularjs-app/assets/ngelements.js
