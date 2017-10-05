import * as React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import { HucFullTextSearchInput, HucSearchResults } from 'huc-ui-components';
import history from '../../store/history'
import { fullTextSearch } from '../../actions/search';
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
		<HucFullTextSearchInput
			onButtonClick={props.fullTextSearch}
		/>
		<div />
		<HucSearchResults
			onClickResult={(result) => history.push(`/documents/${result.id}`)}
			resultBodyComponent={ResultBody}
			searchResults={props.searchResults[props.searchResults.length - 1]}
		/>
	</Search>;

export default connect(
	state => ({
		searchResults: state.search.results,
	}),
	{
		fullTextSearch,
	}
)(Home);
