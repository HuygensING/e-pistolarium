import * as React from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import { HucFullTextSearchInput, HucSearchResults, IResultBody } from 'huc-ui-components';
import { fullTextSearch } from '../../actions/search';

const ResultBody: React.SFC<IResultBody> = (props) =>
	<section>
		{props.result}	
	</section>

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
			resultBodyComponent={ResultBody}
			searchResults={[
				'eerste', 'tweede', 'derde', 'vierde'
			]}
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
