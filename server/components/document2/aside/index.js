"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const huc_ui_components_1 = require("huc-ui-components");
const pergamon_ui_components_1 = require("pergamon-ui-components");
const metadata_1 = require("./metadata");
const OffCanvasAside = (props) => React.createElement(huc_ui_components_1.HucOffCanvasAside, { onChangeActiveAside: props.onChangeActiveAside, open: true },
    React.createElement(huc_ui_components_1.Panel, { title: "Metadata", type: huc_ui_components_1.Aside.Metadata },
        React.createElement(metadata_1.default, { rootAnnotation: props.rootAnnotation }),
        React.createElement(pergamon_ui_components_1.Keywords, { keywords: props.rootAnnotation.keywords, onClickKeyword: props.onClickKeyword })),
    React.createElement(huc_ui_components_1.Panel, { title: "Named entities", type: huc_ui_components_1.Aside.Annotations },
        React.createElement(pergamon_ui_components_1.AnnotationList, { activateAnnotation: props.activateAnnotation, activeAnnotation: props.activeAnnotation, filter: ((a) => ['persName', 'placeName', 'geogName', 'name', 'rs'].indexOf(a.type) > -1), rootAnnotation: props.rootAnnotation }),
        React.createElement("h2", { style: { margin: '1em 0' } }, "Notes"),
        React.createElement(pergamon_ui_components_1.AnnotationList, { activateAnnotation: props.activateAnnotation, activeAnnotation: props.activeAnnotation, filter: ((a) => ['note'].indexOf(a.type) > -1), rootAnnotation: props.rootAnnotation })));
exports.default = OffCanvasAside;
