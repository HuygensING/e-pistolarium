// import * as React from 'react'
// import { HucFullTextSearchInput } from 'huc-ui-components'
// import { autoSuggest, searchFullText, searchSemanticSuggestions } from '../../actions/full-text-search'
// import SemanticSuggestions from './semantic-suggestions'


// export interface IProps {
// 	// requestingSemanticSuggestions: boolean
// 	// semanticSuggestions: ISuggestion[]
// }
// export interface IState {
// 	requesting: boolean
// 	suggestions: string[]
// }
// class SKFullTextSearch extends React.PureComponent<IProps, IState> {
// 	public state = {
// 		requesting: false,
// 		suggestions: [],
// 	}

// 	public render() {
// 		return (
// 			<>
// 				<HucFullTextSearchInput
// 					autoSuggest={autoSuggest}
// 					onChange={() => {
// 						if (this.state.suggestions.length) this.setState({ suggestions: [] })
// 					}}
// 					onKeyDown={(ev) => {
// 						if (ev.keyCode === 13) this.search(ev.target.value)
// 					}}
// 					query={''}
// 					search={(q) => this.search(q)}
// 				/>
// 				<SemanticSuggestions
// 					onClickSuggestion={searchFullText}
// 					requesting={this.state.requesting}
// 					semanticSuggestions={this.state.suggestions}
// 				/>
// 			</>
// 		)
// 	}

// 	private search = async (query) => {
// 		this.setState({ requesting: true })
// 		searchFullText(query)	
// 		const suggestions = await searchSemanticSuggestions(query)
// 		this.setState({ suggestions, requesting: false })
// 	}
// }

// export default SKFullTextSearch
