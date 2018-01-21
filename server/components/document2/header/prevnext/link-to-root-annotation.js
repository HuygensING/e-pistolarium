"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const utils_1 = require("../../../../utils");
const RootAnnotationLink = (props) => React.createElement("button", { onClick: (ev) => {
        utils_1.changeLocation(`/documents/${props.annotation.id}`);
    } }, props.children);
exports.default = RootAnnotationLink;
