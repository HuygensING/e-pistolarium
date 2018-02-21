FROM node:9-alpine

RUN apk update
# RUN apk add nodejs

WORKDIR /app

COPY package.json .
COPY webpack.config.js .
COPY tsconfig.json .
COPY tsconfig.server.json .
COPY src src/
COPY static_local static_local/
COPY scripts scripts/ 

# COPY docker/nginx.conf /etc/nginx/nginx.conf

RUN npm install
RUN npm run build

# RUN cp node_modules/react/dist/react.min.js build/react.js
# RUN cp node_modules/react-dom/dist/react-dom.min.js build/react-dom.js

# Clean up
RUN rm -rf \
	# build.sh \
	# package.json \
	webpack.config.js \
	tsconfig.json \
	src \
	scripts
	# node_modules
# RUN apk del nodejs

EXPOSE 3000 

CMD ["node", "server/server/index.js"]
