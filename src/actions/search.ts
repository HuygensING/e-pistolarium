const fetchSemanticSuggestions = (query: string) => async (dispatch, getState) => {
	const xhr = await fetch(`/api/search`, {
		body: JSON.stringify({ query }),
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
	})
	const data = await xhr.json()

	dispatch({
		type: 'RECEIVE_SEMANTIC_SUGGESTIONS',
		semanticSuggestions: data.suggestions,
	})
}

export const clearSemanticSuggestions = () => (dispatch, getState) =>
	dispatch({ type: 'CLEAR_SEMANTIC_SUGGESTIONS'})

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

	dispatch(receiveSearchResults(data, query))
	dispatch(fetchSemanticSuggestions(query))
}

export const receiveSearchResults = (results, query:string = '') => (dispatch, getState) =>
	dispatch({
		fullTextSearchQuery: query,
		searchResults: {
			hits: results.hits.hits
				.map(hit => ({
					...{ id: hit._id },
					...hit._source
				})),
			total: results.hits.total,
		},
		type: 'RECEIVE_SEARCH_RESULTS',
	})



