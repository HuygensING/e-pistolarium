import { Annotation, ISuggestion } from 'pergamon-ui-components'
import { ISearchResults } from 'huc-ui-components'
import { PROPS, STATE_CHANGE } from './constants'
import searchReducer from './reducers/search'
import annotationsReducer from './reducers/annotations'
export interface IAnnotationsState {
	rootAnnotation: Annotation
	activeAnnotation?: Annotation
}

export interface ISearchState {
	aggregate: any[]
	requestingSemanticSuggestions: boolean
	results: ISearchResults
	semanticSuggestions: ISuggestion[]
	size: number
}

export interface IProps {
	annotations: IAnnotationsState
	search: ISearchState
}

export const defaultProps: IProps = {
	annotations: {
		rootAnnotation: null,
		activeAnnotation: null,
	},
	search: {
		aggregate: [],
		requestingSemanticSuggestions: false,
		results: { total: 0, hits: [] },
		semanticSuggestions: [],
		size: 20,
	},
}

export const getClientProps = (): IProps => {
	let prevProps
	const prevPropsJson = sessionStorage.getItem(PROPS)
	if (prevPropsJson == null) {
		prevProps = defaultProps
		sessionStorage.setItem(PROPS, JSON.stringify(defaultProps))
	} else {
		prevProps = JSON.parse(prevPropsJson)
	}

	if (window[PROPS].hasOwnProperty('annotations')) {
		if (window[PROPS].annotations.hasOwnProperty('rootAnnotation')) {
			window[PROPS].annotations.rootAnnotation = new Annotation(window[PROPS].annotations.rootAnnotation)
		}
		if (window[PROPS].annotations.hasOwnProperty('activeAnnotation')) {
			window[PROPS].annotations.activeAnnotation = new Annotation(window[PROPS].annotations.activeAnnotation)
		}
	}

	return { ...prevProps, ...window[PROPS] }
}

export const getServerProps = (props: Partial<IProps> = {}): IProps => {
	return { ...defaultProps, ...props }
}

const reduce = (prevState, type, changedState) => {
	prevState.search = searchReducer(prevState.search, type, changedState)
	prevState.annotations = annotationsReducer(prevState.annotations, type, changedState)
	return prevState
}

export const updateState = (type: string, changedState = {}) => {
	const prevStateJson = sessionStorage.getItem(PROPS)
	const prevState = JSON.parse(prevStateJson)

	const nextState = reduce(prevState, type, changedState) 

	window.dispatchEvent(new CustomEvent(STATE_CHANGE, { detail: nextState }))
	sessionStorage.setItem(PROPS, JSON.stringify(nextState))
	return nextState
}

// export const updateNestedState = (nestedKey, changedState) => {
// 	const prevStateJson = sessionStorage.getItem(PROPS)
// 	const prevState = JSON.parse(prevStateJson)
// 	const nextNestedState = { ...prevState[nestedKey], ...changedState }
// 	return updateState({ ...prevState, [nestedKey]: nextNestedState })
// }