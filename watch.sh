#!/usr/bin/env bash

rm -rf build
node_modules/.bin/webpack -w
cp node_modules/react/dist/react.js build
cp node_modules/react-dom/dist/react-dom.js build