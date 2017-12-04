#!/usr/bin/env bash

rm build/*
cp node_modules/react/dist/react.js build
cp node_modules/react-dom/dist/react-dom.js build
node_modules/.bin/webpack -w