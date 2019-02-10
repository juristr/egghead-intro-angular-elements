#!/bin/sh
ng build ngelements --prod --output-hashing=none --single-bundle true --keep-polyfills true
mv dist/ngelements/main.js demo/ngelements.js
mv dist/ngelements/polyfills.js demo
