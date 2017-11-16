import * as React from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"
import { HucFullTextSearchInput, HucSearchResults } from 'huc-ui-components'
import { SemanticSuggestions } from 'pergamon-ui-components'
import Facets from './facets'
import Aside from './aside'
import history from '../../store/history'
import { fullTextSearch, receiveSearchResults, clearSemanticSuggestions } from '../../actions/search';
import ResultBody from './result-body';
import FullTextSearch, { IProps as IFullTextSearchProps } from './full-text-search'

const Search: React.SFC = (props) =>
	<div
		role="search"
		style={{
			display: 'grid',
			gridTemplateColumns: '320px 50px auto',
			margin: '50px',
		}}
	>
		{props.children}
	</div>

export interface IProps extends IFullTextSearchProps {
	receiveSearchResults: (r: any, q?: string) => void
	requestingSemanticSuggestions: boolean
	searchResults: {
		total: number,
	}
}
const Home: React.SFC<IProps> = (props) =>
	<Search>
		<div>
			<FullTextSearch {...props} />
			<SemanticSuggestions
				fullTextSearch={props.fullTextSearch}
				requesting={props.requestingSemanticSuggestions}
				semanticSuggestions={props.semanticSuggestions}
			/>
			<Facets onChange={props.receiveSearchResults} />
		</div>
		<div />
		<HucSearchResults
			onClickResult={(result) => history.push(`/documents/${result.id}`)}
			resultBodyComponent={ResultBody}
			searchResults={props.searchResults}
		/>
		{
			props.searchResults.total > 0 &&
			<Aside />
		}
	</Search>;

export default connect(
	state => ({
		fullTextSearchQuery: state.search.fullTextSearchQuery,
		requestingSemanticSuggestions: state.search.requestingSemanticSuggestions,
		searchResults: state.search.results[state.search.results.length - 1],
		semanticSuggestions: state.search.semanticSuggestions,
	}),
	{
		clearSemanticSuggestions,
		fullTextSearch,
		receiveSearchResults,
	}
)(Home);