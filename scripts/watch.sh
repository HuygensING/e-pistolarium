#!/usr/bin/env bash

rm -rf build
mkdir build
cp node_modules/react/dist/react.js build
cp node_modules/react-dom/dist/react-dom.js build
# cp node_modules/pergamon-annotation-tree-builder/build/bundle.js build/annotation-tree-builder.js
node_modules/.bin/webpack -w