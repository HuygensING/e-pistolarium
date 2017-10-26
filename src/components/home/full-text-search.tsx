import * as React from 'react'
import { HucFullTextSearchInput } from 'huc-ui-components'
import { postSearch } from '../../actions/search';
import { ISuggestion } from 'pergamon-ui-components'

const autoSuggest = async (query: string) => {
	const xhr = await postSearch({
		suggest: {
			woorden: {
				text: query,
				term: {
					field: 'body',
				},
			},
		}
	})

	const data = await xhr.json()

	return data.suggest.woorden[0].options.map(x => x.text)
}

export interface IProps {
	autoSuggest: (q: string) => string[]
	clearSemanticSuggestions: () => void
	fullTextSearch: (q: string) => void
	fullTextSearchQuery: string
	semanticSuggestions: ISuggestion[]
}
export interface IState {
	suggestions: string[]
}
class FullTextSearch extends React.Component<IProps, IState> {
	public state = {
		suggestions: []
	}

	public render() {
		return (
			<HucFullTextSearchInput
				autoSuggest={autoSuggest}
				onChange={() => {
					if (this.props.semanticSuggestions.length) this.props.clearSemanticSuggestions()
				}}
				onKeyDown={(ev) => {
					if (ev.keyCode === 13) {
						this.props.fullTextSearch(ev.target.value)
					}
				}}
				query={this.props.fullTextSearchQuery}
				search={this.props.fullTextSearch}
			/>
		)
	}
}

export default FullTextSearch
