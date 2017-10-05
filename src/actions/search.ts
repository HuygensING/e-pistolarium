export const fullTextSearch = (query) => async (dispatch, getState) => {
	const xhr = await fetch(`/api/documents/search`, {
		body: JSON.stringify({
			query: {
				query_string: query
			}
		}),
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST'
	});
	const data = await xhr.json();
	console.log(data)
}

