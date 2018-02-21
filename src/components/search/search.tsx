import * as React from 'react'
import { HucSearchResults } from 'huc-ui-components'
import Facets from './facets'
import Aside from './aside'
import ResultBody from './result-body';
import FullTextSearch from './full-text-search'
import * as debounce from 'lodash.debounce'
import { IProps } from '../../props'
import { receiveSearchResults, fetchNextSearchResult } from '../../actions/search'
import Sparkline from './sparkline'
import App from '../app'

const Wrapper = (props) =>
	<div
		role="search"
		style={{
			display: 'grid',
			gridTemplateColumns: '320px 4em auto',
			margin: '2em auto',
			maxWidth: '1100px',
		}}
	>
		{props.children}
	</div>

// export interface IProps extends IFullTextSearchProps {
// 	aggregate?: any[]
// 	fetchNextSearchResult?: () => void
// 	receiveSearchResults?: (r: any, q?: string) => void
// 	requestingSemanticSuggestions?: boolean
// 	searchResults?: SearchResults
// }
class Search extends React.PureComponent<Partial<IProps>> {
	public componentDidMount() {
		document.addEventListener('scroll', this.onScrollDebounced)
	}

	public componentWillUnmount() {
		document.removeEventListener('scroll', this.onScrollDebounced)
	}

	public render() {
		return (
			<App>
				<Wrapper>
					<div style={{marginLeft: '2em'}}>
						<FullTextSearch {...this.props} />
						<Facets
							receiveSearchResults={receiveSearchResults}
						/>
					</div>
					<div />
					<div
						style={{
							marginBottom: '10em',
							marginRight: '2em',
						}}
					>
						<HucSearchResults
							// onClickResult={(result) => changeLocation(`/documents/${result.id}`)}
							resultBodyComponent={ResultBody}
							searchResults={this.props.search.results}
						/>
						<Sparkline aggregate={this.props.search.aggregate} />
					</div>
					<Aside searchResults={this.props.search.results} />
				</Wrapper>
			</App>
		)
	}
	
	private onScroll = () => {
		const doc = document.documentElement
		if (doc.scrollHeight - (doc.scrollTop + doc.clientHeight) < doc.scrollHeight * 0.1) {
			fetchNextSearchResult()
		}
	}

	private onScrollDebounced = debounce(this.onScroll, 100)
}

export default Search
// export default connect(
// 	state => ({
// 		aggregate: state.search.aggregate,
// 		fullTextSearchQuery: state.search.fullTextSearchQuery,
// 		requestingSemanticSuggestions: state.search.requestingSemanticSuggestions,
// 		searchResults: state.search.results[state.search.results.length - 1],
// 		semanticSuggestions: state.search.semanticSuggestions,
// 	}),
// 	{
// 		clearSemanticSuggestions,
// 		fetchNextSearchResult,
// 		fullTextSearch,
// 		receiveSearchResults,
// 	}
// )(Home);