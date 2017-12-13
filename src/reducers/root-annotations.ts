import { Annotation } from 'pergamon-ui-components';
import { replaceItemInArray } from "./utils";

const initialState: Annotation[] = [];

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		case 'RECEIVE_ROOT_ANNOTATION_IDS': {
			nextState = action.rootAnnotationIds.map(id => new Annotation({ id }));
			break;
		}

		case 'SET_ROOT_ANNOTATION': {
			nextState = replaceItemInArray(nextState, action.rootAnnotation);
		}

		default:
	}

	return nextState;
};
