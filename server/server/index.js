"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fetch = require("node-fetch");
const express = require("express");
const proxy = require("express-http-proxy");
const React = require("react");
const server_1 = require("react-dom/server");
const pergamon_ui_components_1 = require("pergamon-ui-components");
const document_1 = require("../components/document2/document");
const search_1 = require("../components/search2/search");
const props_1 = require("../props");
const template_1 = require("./template");
const fetchRootAnnotation = async (id) => {
    const response = await fetch(`http://janus:8080/documents/${id}`);
    return await response.json();
};
const app = express();
app.disable('x-powered-by');
app.use(express.static(path.resolve(__dirname, '../../static_local')));
app.use(express.static(path.resolve(__dirname, '../../node_modules')));
app.use('/api', proxy('http://janus:8080'));
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../../static_local/home/index.html')));
app.get('/documents/:id', async (req, res) => {
    const annotation = await fetchRootAnnotation(req.params.id);
    const appString = server_1.renderToString(React.createElement(document_1.default, Object.assign({}, props_1.getServerProps({ annotations: { rootAnnotation: new pergamon_ui_components_1.Annotation(annotation) } }))));
    res.send(template_1.default('document', appString, { annotations: { rootAnnotation: annotation } }));
});
app.get('/search', async (req, res) => {
    const appString = server_1.renderToString(React.createElement(search_1.default, Object.assign({}, props_1.getServerProps())));
    res.send(template_1.default('search', appString, {}));
});
const PORT = 3000;
app.listen(PORT);
console.log(`Listening on port ${PORT}`);
