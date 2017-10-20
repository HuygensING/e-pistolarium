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

	dispatch(receiveSearchResults(data))
}

export const receiveSearchResults = (results) => (dispatch, getState) =>
	dispatch({
		type: 'RECEIVE_SEARCH_RESULTS',
		searchResults: {
			hits: results.hits.hits
				.map(hit => ({
					...{ id: hit._id },
					...hit._source
				})),
			total: results.hits.total,
		}
	})



