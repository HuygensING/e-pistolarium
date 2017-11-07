import {renameProp, setProps} from "../reducers/utils"
import { defaultAnnotation } from 'pergamon-ui-components'
import { SYSTEM_ROOT_TYPE } from "../../src/constants"

const fetchRootAnnotation = async (id: string) => {
	const response = await fetch(`/api/documents/${id}`)
	const root = await response.json()

	return {
		...defaultAnnotation,
		...root,
		metadata: root.annotations
			.reduce((prev, curr) => {
				if (curr.type === 'meta') prev[curr.attributes.type] = curr.attributes.value
				return prev
			}, {})
	}
}

export const fetchKeywords = (root) => async (dispatch, getState) => {
	if (root.hasOwnProperty('keywords')) return
	const response = await fetch(`/api/documents/${root.id}/keywords`)
	const keywords = await response.json()
	dispatch({
		keywords: keywords.keywords,
		type: 'RECEIVE_KEYWORDS',
	})
}

export const setRootAnnotation = (id) => async (dispatch, getState) => {
	let rootAnnotation = getState().rootAnnotations.find(a => a.id === id);
	if (rootAnnotation == null) rootAnnotation = defaultAnnotation;
	if (rootAnnotation.type == null) {
		const fetchedAnnotation = await fetchRootAnnotation(id);
		rootAnnotation = setProps(rootAnnotation, fetchedAnnotation);
		rootAnnotation = setProps(rootAnnotation, {
			end: rootAnnotation.text.length,
			start: 0,
			type: SYSTEM_ROOT_TYPE,
		});
		rootAnnotation = renameProp(rootAnnotation, 'annotations', 'children');
		rootAnnotation = renameProp(rootAnnotation, 'target', 'parent');

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
