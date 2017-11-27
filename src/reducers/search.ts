import { setProps, replaceItemInArray } from "./utils"
import { ISuggestion } from 'pergamon-ui-components'
import { SearchResults } from 'huc-ui-components'

interface IState {
	aggregate: any[]
	fullTextSearchQuery: string
	requestingSemanticSuggestions: boolean
	results: SearchResults[]
	semanticSuggestions: ISuggestion[]
	size: number
}

const initialState: IState = {
	aggregate: [],
	fullTextSearchQuery: '',
	requestingSemanticSuggestions: false,
	results: [],
	semanticSuggestions: [],
	size: 20,
}

export default (state: IState = initialState, action) => {
	let nextState = state

	switch (action.type) {
		case 'RECEIVE_SEARCH_RESULTS': {
			nextState = setProps(state, {
				fullTextSearchQuery: action.fullTextQuery,
				results: state.results.concat({
					...action.results,
					query: action.query,
					id: JSON.stringify(action.query),
				})
			})

			break
		}

		case 'RECEIVE_NEXT_SEARCH_RESULTS': {
			const lastResults = state.results[state.results.length - 1]
			const results = replaceItemInArray(state.results, setProps(lastResults, {
				hits: lastResults.hits.concat(action.results.hits)
			}))
			nextState = setProps(state, { results })

			break
		}

		case 'FETCH_SEMANTIC_SUGGESTIONS': {
			nextState = setProps(state, {
				requestingSemanticSuggestions: true,
			})

			break
		}

		case 'RECEIVE_SEARCH_RESULT_AGGREGATE': {
			nextState = setProps(state, {
				aggregate: action.aggregate,
			})

			break
		}

		case 'RECEIVE_SEMANTIC_SUGGESTIONS': {
			nextState = setProps(state, {
				requestingSemanticSuggestions: false,
				semanticSuggestions: action.semanticSuggestions,
			})

			break
		}

		case 'CLEAR_SEMANTIC_SUGGESTIONS': {
			nextState = setProps(nextState, {
				semanticSuggestions: []
			})

			break
		}

		default:
	}

	return nextState
}
