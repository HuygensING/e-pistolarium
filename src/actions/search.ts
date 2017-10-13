export const fullTextSearch = (query: string) => async (dispatch, getState) => {
	const xhr = await fetch(`/api/documents/search`, {
		body: JSON.stringify({
			query: {
				query_string: {
					query: query
				}
			}
		}),
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST'
	});
	const data = await xhr.json();

	dispatch({
		type: 'RECEIVE_SEARCH_RESULTS',
		searchResults: {
			hits: data.hits.hits
				.map(hit => ({
					...{ id: hit._id },
					...hit._source
				})),
			total: data.hits.total,
		}
	})
}

