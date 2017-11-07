import { defaultAnnotation, IAnnotation } from 'pergamon-ui-components';
import {unsetProp, setProps} from "./utils";

interface IState {
	active: IAnnotation;
	root: IAnnotation;
}

const initialState: IState = {
	active: null,
	root: defaultAnnotation,
};

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		case 'ACTIVATE_ANNOTATION': {
			nextState = setProps(nextState, { active: action.annotation });
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
			const root = setProps(nextState.root, { keywords: action.keywords })
			nextState = setProps(nextState, { root })
			break
		}

		default:
	}

	return nextState;
};
