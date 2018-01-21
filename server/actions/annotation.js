"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pergamon_ui_components_1 = require("pergamon-ui-components");
const utils_1 = require("../reducers/utils");
const props_1 = require("../props");
const fetchRootAnnotation = async (id) => {
    const response = await fetch(`/api/documents/${id}`);
    const root = await response.json();
    return new pergamon_ui_components_1.Annotation(root);
};
exports.fetchKeywords = async (root) => {
    if (root.keywords != null)
        return;
    const response = await fetch(`/api/documents/${root.id}/keywords`);
    const data = await response.json();
    const rootAnnotation = utils_1.setProps(root, { keywords: data.keywords });
    props_1.updateState('SET_ROOT_ANNOTATION', { rootAnnotation });
};
exports.setRootAnnotation = (id) => async (dispatch, getState) => {
    const state = getState();
    if (state.annotation.root.id === id)
        return;
    let rootAnnotation = state.rootAnnotations.find(a => a.id === id);
    if (rootAnnotation == null)
        rootAnnotation = new pergamon_ui_components_1.Annotation();
    if (rootAnnotation.end == null) {
        rootAnnotation = await fetchRootAnnotation(id);
    }
    dispatch({
        rootAnnotation,
        type: 'SET_ROOT_ANNOTATION',
    });
};
exports.activateAnnotation = (annotationId) => {
    props_1.updateState('ACTIVATE_ANNOTATION', { annotationId });
};
exports.deactivateAnnotation = () => async (dispatch, getState) => {
    props_1.updateState('DEACTIVATE_ANNOTATION');
};
