"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const huc_ui_components_1 = require("huc-ui-components");
const utils_1 = require("../utils");
const Wrapper = (props) => React.createElement("div", { style: {
        display: 'grid',
        gridTemplateRows: '10vh 90vh',
    } }, props.children);
exports.default = (props) => (React.createElement(Wrapper, null,
    React.createElement(huc_ui_components_1.HucHeader, { title: "Correspondence", menuItems: ["Home", "Correspondence", "About"], onClickLogo: () => utils_1.changeLocation('/'), onClickMenuItem: (mi) => {
            if (mi === 'Home')
                utils_1.changeLocation('/');
        }, onClickTitle: () => utils_1.changeLocation('/') }),
    React.createElement(huc_ui_components_1.HucBrandLabel, null),
    React.createElement("main", null, props.children)));
