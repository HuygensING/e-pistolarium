"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const pergamon_ui_components_1 = require("pergamon-ui-components");
const prevnext_1 = require("./prevnext");
const utils_1 = require("../../../utils");
const Wrapper = (props) => React.createElement("div", { style: {
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        margin: '3em auto',
        width: '550px',
    } }, props.children);
const Header = (props) => React.createElement(Wrapper, null,
    React.createElement(pergamon_ui_components_1.Metadata, { rootAnnotation: props.rootAnnotation }),
    React.createElement("div", { style: { display: 'grid', gridTemplateRows: '1fr 1fr' } },
        React.createElement("button", { onClick: () => utils_1.changeLocation('/search'), style: {
                height: '2em',
            } }, "< search results"),
        React.createElement(prevnext_1.default, Object.assign({}, props))));
exports.default = Header;
