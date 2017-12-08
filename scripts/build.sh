#!/usr/bin/env sh

rm -rf build
NODE_ENV=production node_modules/.bin/webpack
cp node_modules/react/dist/react.js build
cp node_modules/react-dom/dist/react-dom.js build