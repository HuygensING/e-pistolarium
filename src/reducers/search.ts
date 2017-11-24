import { defaultAnnotation, IAnnotation } from 'pergamon-ui-components'
import {renameProp, replaceItemInArray, setProps} from "./utils"
import { ISuggestion } from 'pergamon-ui-components'

interface IState {
	aggregate: any[]
	fullTextSearchQuery: string
	requestingSemanticSuggestions: boolean
	results: any[]
	semanticSuggestions: ISuggestion[]
}

const initialState: IState = {
	aggregate: [],
	fullTextSearchQuery: '',
	requestingSemanticSuggestions: false,
	results: [{
		hits: [],
		total: 0,
	}],
	semanticSuggestions: [],
}

export default (state: IState = initialState, action) => {
	let nextState = state

	switch (action.type) {
		case 'RECEIVE_SEARCH_RESULTS': {
			nextState = setProps(nextState, {
				fullTextSearchQuery: action.fullTextSearchQuery,
				results: nextState.results.concat(action.searchResults)
			})

			break
		}

		case 'FETCH_SEMANTIC_SUGGESTIONS': {
			nextState = setProps(nextState, {
				requestingSemanticSuggestions: true,
			})

			break
		}

		case 'RECEIVE_SEARCH_RESULT_AGGREGATE': {
			nextState = setProps(nextState, {
				aggregate: action.aggregate,
			})

			break
		}

		case 'RECEIVE_SEMANTIC_SUGGESTIONS': {
			nextState = setProps(nextState, {
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
