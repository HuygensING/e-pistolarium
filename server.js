#!/usr/bin/env node

const browserSync = require('browser-sync').create();
const modRewrite = require('connect-modrewrite');
const debounce = require('lodash.debounce');
const url = require('url');

const baseDir = './';
const watchFiles = [
	baseDir + 'build/**/*.js',
	baseDir + 'build/**/*.css',
	'./index.html'
];

const onFilesChanged = (event, file) => {
	if (event === 'change') {
		browserSync.reload(file);
	}
};

browserSync.watch(watchFiles, debounce(onFilesChanged, 300));

browserSync.init({
	server: {
		baseDir: [baseDir],
		middleware: [
			modRewrite([
				'^/css/(.*)$ /css/$1 [L]',
				'^/js/(.*)$ /js/$1 [L]',
				'^/images/(.*)$ /images/$1 [L]',
				'^/fonts/(.*)$ /fonts/$1 [L]',
				'^[^\\.]*$ /index.html [L]'
			])
		]
	}
});
