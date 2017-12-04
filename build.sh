#!/usr/bin/env bash

rm build/*
cp node_modules/react/dist/react.js build
cp node_modules/react-dom/dist/react-dom.js build
NODE_ENV=production node_modules/.bin/webpack