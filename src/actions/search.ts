import { updateState } from '../props'
import { PROPS } from '../constants'

export const fetchNextSearchResult = async () => {
	const stateJson = sessionStorage.getItem(PROPS)
	const state = JSON.parse(stateJson)

	if (state.search.results.hits.length) {
		const body = state.search.results.query
		const size = state.search.size
		body.from = body.hasOwnProperty('from') ? body.from + size : size
		const data = await postSearch(body)
		receiveSearchResults(body, data)
	}
}

export const receiveSearchResults = (query, results: any) => {
	results = {
		aggregations: results.aggregations,
		hits: results.hits.hits
			.map(hit => ({
				...{ id: hit._id },
				...hit._source
			})),
		total: results.hits.total,
	}

 	const next = query.from != null ? 'NEXT_' : ''
	updateState(`RECEIVE_${next}SEARCH_RESULTS`, { query, results })
}

export const postSearch = async (body) => {
	const xhr = await post('/api/documents/search', body)
	return await xhr.json()
}

export const post = (url, body) =>
	fetch(url, {
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST'
	})