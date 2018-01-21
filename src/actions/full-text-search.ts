import { postSearch, receiveSearchResults } from './search';

export const autoSuggest = async (query: string) => {
	const body = {
		suggest: {
			woorden: {
				text: query,
				term: {
					field: 'body',
				},
			},
		}
	}
	const data = await postSearch(body)

	return data.suggest.woorden[0].options.map(x => x.text)
}

export const searchFullText = async (query: string) => {
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
		size: 20,
	}

	const data = await postSearch(body)
	receiveSearchResults(esQuery, data)
}

export const searchSemanticSuggestions = async (query: string) => {
	const xhr = await fetch(`/api/search`, {
		body: JSON.stringify({ query }),
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
	})
	const data = await xhr.json()
	return data.suggestions
}