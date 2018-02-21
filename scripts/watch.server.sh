#!/usr/bin/env sh

rm -rf server
node_modules/.bin/tsc -w -p tsconfig.server.json