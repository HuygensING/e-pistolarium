#!/usr/bin/env bash

rm -rf server
node_modules/.bin/tsc -w -p tsconfig.server.json