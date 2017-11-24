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

// const fetchYearAggregation = (esQuery) => async (dispatch, getState) => {
// 	const response = await postSearch({
// 		aggs: {
// 			letter_per_year: {
// 				date_histogram: {
// 					field: 'date',
// 					interval: 'year',
// 				}
// 			}
// 		},
// 		query: esQuery,
// 		size: 0,
// 	})
// 	const data = await response.json()
// 	console.log(1, data)

// 	// dispatch(receiveYearAggregation(data.aggregations))
// }

const receiveYearAggregation = (aggregations) => (dispatch, getState) => {
	const lpy = (aggregations.letter_per_year.hasOwnProperty('letter_per_year')) ?
		aggregations.letter_per_year.letter_per_year :
		aggregations.letter_per_year

	dispatch({
		type: 'RECEIVE_SEARCH_RESULT_AGGREGATE',
		aggregate: lpy.buckets.map(b => ({
			count: b.doc_count,
			year: +b.key_as_string.slice(0, 4),

		}))
	})
}

export const clearSemanticSuggestions = () => (dispatch, getState) =>
	dispatch({ type: 'CLEAR_SEMANTIC_SUGGESTIONS'})

export const fullTextSearch = (query: string) => async (dispatch, getState) => {
	dispatch({
		type: 'FETCH_SEMANTIC_SUGGESTIONS',
	})

	const esQuery = {
		query_string: {
			query: query
		}
	}

	const xhr = await postSearch({
		aggs: {
			letter_per_year: {
				date_histogram: {
					field: 'date',
					interval: 'year',
				}
			}
		},
		query: esQuery,
		sort: 'date',
	})
	const data = await xhr.json()

	dispatch(receiveSearchResults(data, query))
	dispatch(fetchSemanticSuggestions(query))
}

export const receiveSearchResults = (results, query:string = '') => (dispatch, getState) => {
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

	dispatch(receiveYearAggregation(results.aggregations))
}

export const postSearch = (body) => post('/api/documents/search', body)

export const post = (url, body) =>
	fetch(url, {
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST'
	})