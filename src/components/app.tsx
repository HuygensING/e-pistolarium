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

const App = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const Header = styled.header`
	background: #CCC;
	flex: 1;
	font-size: 2em;
	font-weight: bold;
	height: 8vh;
	line-height: 8vh;
	padding-left: 1vw;
`;

export default () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App>
				<Header>
					<Link to="/">ePistolarium</Link>
				</Header>
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
				{/*{Messages}*/}
			</App>
		</ConnectedRouter>
	</Provider>
);
