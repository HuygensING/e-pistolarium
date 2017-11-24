import * as React from 'react';
import {Link, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import styled from "styled-components";
import Messages, { addMessage } from 'hire-messages';
import store from "../store";
import history from '../store/history';
import Home from './home';
import Document from './document';
import RootAnnotations from './root-annotations';
import { HucHeader } from 'huc-ui-components';
import TagAnalyzer from './tag-analyzer'

const wrapperStyle: React.CSSProperties = {
	display: 'grid',
	gridTemplateColumns: '100vw',
	gridTemplateRows: '10vh 90vh',
};

const headerStyle: React.CSSProperties = {
	background: '#CCC',
	fontSize: '2em',
	fontWeight: 'bold',
	height: '8vh',
	lineHeight: '8vh',
	paddingLeft: '1vw',
};

export default () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div style={{wrapperStyle}}>
				<HucHeader
					title="Correspondence"
					menuItems={["Home", "Correspondence", "About"]}
					onClickLogo={() => history.push('/')}
					onClickMenuItem={(mi) => {
						if (mi === 'Home') history.push('/');
					}}
					onClickTitle={() => history.push('/')}
				/>
				<main>
					<Route
						component={Home}
						exact
						path="/"
					/>
					<Route
						component={Document}
						path="/documents/:id"
					/>
					<Route
						component={RootAnnotations}
						path="/root-annotations"
					/>
					<Route
						component={TagAnalyzer}
						path="/analyze"
					/>
				</main>
			</div>
			{/*{Messages}*/}
		</ConnectedRouter>
	</Provider>
);
