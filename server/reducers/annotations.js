"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pergamon_ui_components_1 = require("pergamon-ui-components");
const utils_1 = require("./utils");
const initialState = {
    activeAnnotation: null,
    rootAnnotation: new pergamon_ui_components_1.Annotation(),
};
exports.default = (state = initialState, type, action) => {
    let nextState = state;
    switch (type) {
        case 'ACTIVATE_ANNOTATION': {
            const activeAnnotation = state.rootAnnotation.annotations.find(a => a.id === action.annotationId);
            nextState = utils_1.setProps(nextState, { activeAnnotation });
            break;
        }
        case 'DEACTIVATE_ANNOTATION': {
            nextState = utils_1.unsetProp(nextState, 'active');
            break;
        }
        case 'SET_ROOT_ANNOTATION': {
            nextState = utils_1.setProps(nextState, { rootAnnotation: action.rootAnnotation });
            break;
        }
        default:
    }
    return nextState;
};
