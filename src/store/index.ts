import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import history from './history';
const logger = (/* store */) => next => action => {
	if (action.hasOwnProperty('type')) {
		console.log('[REDUX]', action.type, action);
	}

	return next(action);
};

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
	applyMiddleware(middleware, thunkMiddleware, logger)
	// applyMiddleware(middleware, thunkMiddleware)
);

export default store;
