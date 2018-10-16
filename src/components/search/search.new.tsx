import * as React from 'react'
import { HucSearchResults } from 'huc-ui-components'
import Aside from './aside'
import ResultBody from './result-body';
import * as debounce from 'lodash.debounce'
import { IProps } from '../../props'
import { fetchNextSearchResult, receiveSearchResults } from '../../actions/search'
import App from '../app'
import FacetedSearch, { Facets, ListFacet, FullTextSearch, RangeFacet, Reset } from 'huc-faceted-search'
import { autoSuggest } from '../../actions/full-text-search'
import SemanticSuggestions from './semantic-suggestions'

const style = {
	display: 'grid',
	gridTemplateColumns: '320px 4em auto',
	margin: '2em auto',
	maxWidth: '1300px',
	padding: '4em',
}

const Wrapper = (props) =>
	<div
		role="search"
		style={style}
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
interface State {
	query: string
}
class Search extends React.PureComponent<Partial<IProps>, State> {
	private fullTextInputRef: React.RefObject<any>
	state: State = {
		query: ''
	}

	constructor(props: IProps) {
		super(props)
		this.fullTextInputRef = React.createRef()
	}

	componentDidMount() {
		document.addEventListener('scroll', this.onScrollDebounced)
	}

	componentWillUnmount() {
		document.removeEventListener('scroll', this.onScrollDebounced)
	}

	render() {
		return (
			<App>
				<Wrapper>
					<FacetedSearch
						backend="elasticsearch"
						onChange={(request, response, query) => {
							this.setState({ query })
							receiveSearchResults(request, response)
						}}
						url="/api/documents/search"
					>
						<FullTextSearch
							autoSuggest={autoSuggest}
							ref={this.fullTextInputRef}
						/>
						<SemanticSuggestions
							onClick={(query: string) => {
								this.fullTextInputRef.current.addQuery(query)
							}}
							query={this.state.query}
						/>
						<Reset />
						<Facets>
							<RangeFacet
								field="date"
								title="Date range"
								type="timestamp"
							/>
							<ListFacet
								field="sender"
								title="Senders"
							/>
							<ListFacet
								field="recipient"
								title="Recipients"
							/>
							<ListFacet
								field="senderloc"
								title="Sender Locations"
							/>
							<ListFacet
								field="recipientloc"
								title="Recipient Locations"
							/>
							<ListFacet
								field="correspondence"
								title="Correspondence"
							/>
						</Facets>
					</FacetedSearch>
					<div />
					<div
						style={{
							marginBottom: '10em',
							marginRight: '2em',
						}}
					>
						<HucSearchResults
							resultBodyComponent={ResultBody}
							searchResults={this.props.search.results}
						/>
						{/* <Sparkline aggregate={this.props.search.aggregate} /> */}
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