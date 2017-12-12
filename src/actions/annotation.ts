import { Annotation } from 'pergamon-ui-components'

const fetchRootAnnotation = async (id: string): Promise<Annotation> => {
	const response = await fetch(`/api/documents/${id}`)
	const root: Partial<Annotation> = await response.json()
	return new Annotation(root)
}

export const fetchKeywords = (root: Annotation) => async (dispatch, getState) => {
	if (root.keywords != null) return
	const response = await fetch(`/api/documents/${root.id}/keywords`)
	const keywords = await response.json()
	dispatch({
		keywords: keywords.keywords,
		type: 'RECEIVE_KEYWORDS',
	})
}

export const setRootAnnotation = (id) => async (dispatch, getState) => {
	const state = getState()
	if (state.annotation.root.id === id) return

	let rootAnnotation = state.rootAnnotations.find(a => a.id === id)
	if (rootAnnotation == null) rootAnnotation = new Annotation()
	if (rootAnnotation.end == null) {
		rootAnnotation = await fetchRootAnnotation(id)
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

export const activateAnnotation = (annotationId: string) => async (dispatch, getState) => {
	const activeAnnotation = getState().annotation.active;
	if (activeAnnotation == null || activeAnnotation.id !== annotationId) {
		dispatch({
			annotationId,
			type: 'ACTIVATE_ANNOTATION',
		});
	} else if (activeAnnotation.id === annotationId) {
		dispatch(deactivateAnnotation());
	}
};

export const deactivateAnnotation = () => async (dispatch, getState) => {
	dispatch({ type: 'DEACTIVATE_ANNOTATION' });
};
