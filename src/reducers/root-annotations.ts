import { defaultAnnotation, IAnnotation } from 'pergamon-ui-components';
import {renameProp, replaceItemInArray, setProps} from "./utils";

const initialState: IAnnotation[] = [];

export default (state = initialState, action) => {
	let nextState = state;

	switch (action.type) {
		case 'RECEIVE_ROOT_ANNOTATION_IDS': {
			nextState = action.rootAnnotationIds.map(id => setProps(defaultAnnotation, { id }));
			break;
		}

		case 'RECEIVE_ROOT_ANNOTATION': {
			nextState = replaceItemInArray(nextState, action.rootAnnotation);
		}

		default:
	}

	return nextState;
};
