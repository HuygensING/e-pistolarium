#!/usr/bin/env sh

# rm -rf build
NODE_ENV=production node_modules/.bin/webpack
node_modules/.bin/tsc -p tsconfig.server.json
# cp node_modules/react/dist/react.js build
# cp node_modules/react-dom/dist/react-dom.js build