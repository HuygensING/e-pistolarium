import { addMessage } from 'hire-messages';

export const getRootAnnotationIds = (force?: boolean) => async (dispatch, getState) => {
	const rootAnnotationIds = getState().rootAnnotationIds;
	if (!force && rootAnnotationIds.length > 0) return;

	const xhr = await fetch(`/api/documents`);
	const data = await xhr.json();

	if (xhr.status === 200) {
		addMessage({
			type: 'success',
			value: 'Root annotation IDs received',
		});
	} else {
		addMessage({
			type: 'error',
			value: xhr.statusText,
		});
	}

	dispatch({
		rootAnnotationIds: data.result,
		type: 'RECEIVE_ROOT_ANNOTATION_IDS',
	});
};
