import { SearchResults } from 'huc-ui-components'

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

	const body = {
		aggs: {
			letter_per_year: {
				date_histogram: {
					field: 'date',
					interval: 'year',
				},
			},
		},
		query: esQuery,
		sort: 'date',
		size: getState().search.size,
	}

	const xhr = await postSearch(body)
	const data = await xhr.json()

	dispatch(receiveSearchResults(body, data, query))
	dispatch(fetchSemanticSuggestions(query))
}

export const fetchNextSearchResult = () => async (dispatch, getState) => {
	const searchState = getState().search
	const results = searchState.results
	if (results.length) {
		const lastResults = results[results.length - 1]
		const body = lastResults.query
		const size = searchState.size
		body.from = body.hasOwnProperty('from') ? body.from + size : size
		const xhr = await postSearch(body)
		const data = await xhr.json()
		dispatch(receiveSearchResults(body, data))
	}
}

export const receiveSearchResults = (query, results: SearchResults, fullTextQuery:string = '') => (dispatch, getState) => {
	const next = query.from != null ? 'NEXT_' : ''
	dispatch({
		fullTextQuery,
		query,
		results: {
			hits: results.hits.hits
				.map(hit => ({
					...{ id: hit._id },
					...hit._source
				})),
			total: results.hits.total,
		},
		type: `RECEIVE_${next}SEARCH_RESULTS`,
	})

	if (results.hasOwnProperty('aggregations')) {
		dispatch(receiveYearAggregation(results.aggregations))
	}
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