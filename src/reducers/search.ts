import { defaultAnnotation, IAnnotation } from 'pergamon-ui-components'
import {renameProp, replaceItemInArray, setProps} from "./utils"
import { ISuggestion } from '../components/home/semantic-suggestions/suggestion';

interface IState {
	fullTextSearchQuery: string
	results: any[]
	semanticSuggestions: ISuggestion[]
}

const initialState: IState = {
	fullTextSearchQuery: '',
	results: [{
		hits: [],
		total: 0,
	}],
	semanticSuggestions: []
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

		case 'RECEIVE_SEMANTIC_SUGGESTIONS': {
			nextState = setProps(nextState, {
				semanticSuggestions: action.semanticSuggestions
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
