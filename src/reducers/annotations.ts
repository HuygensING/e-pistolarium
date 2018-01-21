import { Annotation } from 'pergamon-ui-components';
import {unsetProp, setProps} from "./utils";
import { IAnnotationsState } from '../props'

const initialState: IAnnotationsState = {
	activeAnnotation: null,
	rootAnnotation: new Annotation(),
}

export default (state: IAnnotationsState = initialState, type: string, action) => {
	let nextState: IAnnotationsState = state;

	switch (type) {
		case 'ACTIVATE_ANNOTATION': {
			const activeAnnotation = state.rootAnnotation.annotations.find(a => a.id === action.annotationId)
			nextState = setProps(nextState, { activeAnnotation })
			break;
		}

		case 'DEACTIVATE_ANNOTATION': {
			nextState = unsetProp(nextState, 'active')
			break
		}

		case 'SET_ROOT_ANNOTATION': {
			nextState = setProps(nextState, { rootAnnotation: action.rootAnnotation })
			break
		}

		default:
	}

	return nextState;
};
