import {renameProp, setProps} from "../reducers/utils";
import { defaultAnnotation } from 'pergamon-components';

const fetchRootAnnotation = async (id: string) => {
	const response = await fetch(`/api/documents/${id}`);
	return await response.json();
};

export const setRootAnnotation = (id) => async (dispatch, getState) => {
	let rootAnnotation = getState().rootAnnotations.find(a => a.id === id);
	if (rootAnnotation == null) rootAnnotation = defaultAnnotation;
	if (rootAnnotation.type == null) {
		const fetchedAnnotation = await fetchRootAnnotation(id);
		rootAnnotation = setProps(rootAnnotation, fetchedAnnotation);
		rootAnnotation = setProps(rootAnnotation, { type: 'root' });
		rootAnnotation = renameProp(rootAnnotation, 'annotations', 'children');

		dispatch({
			rootAnnotation,
			type: 'RECEIVE_ROOT_ANNOTATION',
		});
	}

	dispatch({
		rootAnnotation,
		type: 'SET_ROOT_ANNOTATION',
	});
};

export const activateAnnotation = (annotation) => async (dispatch, getState) => {
	const activeAnnotation = getState().annotation.active;
	if (activeAnnotation == null || activeAnnotation.id !== annotation.id) {
		dispatch({
			annotation,
			type: 'ACTIVATE_ANNOTATION',
		});
	} else if (activeAnnotation.id === annotation.id) {
		dispatch(deactivateAnnotation());
	}
};

export const deactivateAnnotation = () => async (dispatch, getState) => {
	dispatch({ type: 'DEACTIVATE_ANNOTATION' });
};
