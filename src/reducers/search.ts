import { defaultAnnotation, IAnnotation } from 'pergamon-components'
import {renameProp, replaceItemInArray, setProps} from "./utils"

interface IState {
	results: any[]
}

const initialState: IState = {
	results: [{
		hits: [],
		total: 0,
	}],
}

export default (state: IState = initialState, action) => {
	let nextState = state

	switch (action.type) {
		case 'RECEIVE_SEARCH_RESULTS': {
			nextState = setProps(nextState, {
				results: nextState.results.concat(action.searchResults)
			})

			break
		}

		default:
	}

	return nextState
}
