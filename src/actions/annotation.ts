import { Annotation } from 'pergamon-ui-components'
import { setProps } from '../reducers/utils'
import { updateState } from '../props';

const fetchRootAnnotation = async (id: string): Promise<Annotation> => {
	const response = await fetch(`/api/documents/${id}`)
	const root: any = await response.json()
	return new Annotation(root)
}

export const fetchKeywords = async (root: Annotation) => {
	if (root.keywords != null) return
	const response = await fetch(`/api/documents/${root.id}/keywords`)
	const data = await response.json()
	const rootAnnotation = setProps(root, { keywords: data.keywords })

	updateState('SET_ROOT_ANNOTATION', { rootAnnotation })
}

export const setRootAnnotation = (id) => async (dispatch, getState) => {
	const state = getState()
	if (state.annotation.root.id === id) return

	let rootAnnotation = state.rootAnnotations.find(a => a.id === id)
	if (rootAnnotation == null) rootAnnotation = new Annotation()
	if (rootAnnotation.end == null) {
		rootAnnotation = await fetchRootAnnotation(id)
	}

	dispatch({
		rootAnnotation,
		type: 'SET_ROOT_ANNOTATION',
	});
};

export const activateAnnotation = (annotationId: string) => {
	updateState('ACTIVATE_ANNOTATION', { annotationId })
	// const activeAnnotation = getState().annotation.active;
	// if (activeAnnotation == null || activeAnnotation.id !== annotationId) {
	// 	dispatch({
	// 		annotationId,
	// 		type: 'ACTIVATE_ANNOTATION',
	// 	});
	// } else if (activeAnnotation.id === annotationId) {
	// 	dispatch(deactivateAnnotation());
	// }
};

export const deactivateAnnotation = () => async (dispatch, getState) => {
	updateState('DEACTIVATE_ANNOTATION')
	// updateState('annotations', { annotationId })
	// dispatch({ type: 'DEACTIVATE_ANNOTATION' });
};
