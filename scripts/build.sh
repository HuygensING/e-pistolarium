#!/usr/bin/env sh

# Client
rm -rf static_local/js
NODE_ENV=production node_modules/.bin/webpack --mode production

# Express
rm -rf server
node_modules/.bin/tsc -p tsconfig.server.json