"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pergamon_ui_components_1 = require("pergamon-ui-components");
const constants_1 = require("./constants");
const search2_1 = require("./reducers/search2");
const annotations_1 = require("./reducers/annotations");
exports.defaultProps = {
    annotations: {
        rootAnnotation: null,
        activeAnnotation: null,
    },
    search: {
        aggregate: [],
        requestingSemanticSuggestions: false,
        results: { total: 0, hits: [] },
        semanticSuggestions: [],
        size: 20,
    },
};
exports.getClientProps = () => {
    let prevProps;
    const prevPropsJson = sessionStorage.getItem(constants_1.PROPS);
    if (prevPropsJson == null) {
        prevProps = exports.defaultProps;
        sessionStorage.setItem(constants_1.PROPS, JSON.stringify(exports.defaultProps));
    }
    else {
        prevProps = JSON.parse(prevPropsJson);
    }
    if (window[constants_1.PROPS].hasOwnProperty('annotations')) {
        if (window[constants_1.PROPS].annotations.hasOwnProperty('rootAnnotation')) {
            window[constants_1.PROPS].annotations.rootAnnotation = new pergamon_ui_components_1.Annotation(window[constants_1.PROPS].annotations.rootAnnotation);
        }
        if (window[constants_1.PROPS].annotations.hasOwnProperty('activeAnnotation')) {
            window[constants_1.PROPS].annotations.activeAnnotation = new pergamon_ui_components_1.Annotation(window[constants_1.PROPS].annotations.activeAnnotation);
        }
    }
    return Object.assign({}, prevProps, window[constants_1.PROPS]);
};
exports.getServerProps = (props = {}) => {
    return Object.assign({}, exports.defaultProps, props);
};
const reduce = (prevState, type, changedState) => {
    prevState.search = search2_1.default(prevState.search, type, changedState);
    prevState.annotations = annotations_1.default(prevState.annotations, type, changedState);
    return prevState;
};
exports.updateState = (type, changedState = {}) => {
    const prevStateJson = sessionStorage.getItem(constants_1.PROPS);
    const prevState = JSON.parse(prevStateJson);
    const nextState = reduce(prevState, type, changedState);
    window.dispatchEvent(new CustomEvent(constants_1.STATE_CHANGE, { detail: nextState }));
    sessionStorage.setItem(constants_1.PROPS, JSON.stringify(nextState));
    return nextState;
};
