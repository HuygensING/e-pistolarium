import * as React from 'react'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"
import { HucFullTextSearchInput, HucSearchResults } from 'huc-ui-components'
import Facets from './facets'
import Aside from './aside'
import history from '../../store/history'
import { fullTextSearch, receiveSearchResults } from '../../actions/search';
import ResultBody from './result-body';

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

const Home = (props) =>
	<Search>
		<div>
			<HucFullTextSearchInput
				onButtonClick={props.fullTextSearch}
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
		searchResults: state.search.results[state.search.results.length - 1],
	}),
	{
		fullTextSearch,
		receiveSearchResults,
	}
)(Home);