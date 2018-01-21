import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
// import annotationReducer from './annotation';
import rootAnnotationsReducer from './root-annotations';
import searchReducer from './search';

export default combineReducers({
	// annotation: annotationReducer,
	rootAnnotations: rootAnnotationsReducer,
	router: routerReducer,
	search: searchReducer,
});
