"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const document_1 = require("./document");
const props_1 = require("../../props");
react_dom_1.hydrate(React.createElement(document_1.default, Object.assign({}, props_1.getProps())), document.getElementById('container'));
