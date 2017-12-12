import { Annotation } from 'pergamon-ui-components';
import {unsetProp, setProps} from "./utils";

interface IState {
	active: Annotation
	root: Annotation
}

const initialState: IState = {
	active: null,
	root: new Annotation(),
}

export default (state: IState = initialState, action) => {
	let nextState: IState = state;

	switch (action.type) {
		case 'ACTIVATE_ANNOTATION': {
			const active = state.root.annotations.find(a => a.id === action.annotationId)
			nextState = setProps(nextState, { active })
			break;
		}

		case 'DEACTIVATE_ANNOTATION': {
			nextState = unsetProp(nextState, 'active')
			break
		}

		case 'SET_ROOT_ANNOTATION': {
			nextState = setProps(nextState, { root: action.rootAnnotation })
			break
		}

		case 'RECEIVE_KEYWORDS': {
			const root = setProps(nextState.root, { keywords: new Set(action.keywords) })
			nextState = setProps(nextState, { root })
			break
		}

		default:
	}

	return nextState;
};
