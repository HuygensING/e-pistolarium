FROM nginx:1.11.8-alpine

RUN apk update
RUN apk add nodejs

WORKDIR /usr/share/nginx/html

COPY package.json .
COPY webpack.config.js .
COPY tsconfig.json .
COPY index.html .
COPY src src/

COPY docker/nginx.conf /etc/nginx/nginx.conf

RUN npm install
RUN npm run build

RUN cp node_modules/react/dist/react.min.js build/react.js
RUN cp node_modules/react-dom/dist/react-dom.min.js build/react-dom.js

# Clean up
RUN rm -rf \
	package.json \
	webpack.config.js \
	tsconfig.json \
	src \
	node_modules
RUN apk del nodejs

EXPOSE 80 443 
