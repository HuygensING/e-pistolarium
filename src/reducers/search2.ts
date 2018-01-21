import { setProps } from "./utils"
import { ISearchState } from "../props"

const initialState: ISearchState = {
	aggregate: [],
	requestingSemanticSuggestions: false,
	results: null,
	semanticSuggestions: [],
	size: 20,
}

const getAggregate = (results) => {
	if (!results.hasOwnProperty('aggregations')) return []

	const lpy = (results.aggregations.letter_per_year.hasOwnProperty('letter_per_year')) ?
		results.aggregations.letter_per_year.letter_per_year :
		results.aggregations.letter_per_year

	return lpy.buckets.map(b => ({
		count: b.doc_count,
		year: +b.key_as_string.slice(0, 4),
	}))
}

export default (state: ISearchState = initialState, type: string, changedState) => {
	let nextState = state

	switch (type) {
		case 'RECEIVE_SEARCH_RESULTS': {
			nextState = setProps(state, {
				aggregate: getAggregate(changedState.results),
				results: {
					...changedState.results,
					query: changedState.query,
					id: JSON.stringify(changedState.query),
				}
			})

			break
		}

		case 'RECEIVE_NEXT_SEARCH_RESULTS': {
			const results = setProps(state.results, {
				hits: state.results.hits.concat(changedState.results.hits)
			})
			nextState = setProps(state, { results })

			break
		}

		// case 'FETCH_SEMANTIC_SUGGESTIONS': {
		// 	nextState = setProps(state, {
		// 		requestingSemanticSuggestions: true,
		// 	})

		// 	break
		// }

		// case 'RECEIVE_SEARCH_RESULT_AGGREGATE': {
		// 	nextState = setProps(state, {
		// 		aggregate: action.aggregate,
		// 	})

		// 	break
		// }

		// case 'RECEIVE_SEMANTIC_SUGGESTIONS': {
		// 	nextState = setProps(state, {
		// 		requestingSemanticSuggestions: false,
		// 		semanticSuggestions: action.semanticSuggestions,
		// 	})

		// 	break
		// }

		// case 'CLEAR_SEMANTIC_SUGGESTIONS': {
		// 	nextState = setProps(nextState, {
		// 		semanticSuggestions: []
		// 	})

		// 	break
		// }

		default:
	}

	return nextState
}
