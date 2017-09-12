import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';
import annotationReducer from './annotation';
import rootAnnotations from './root-annotations';

export default combineReducers({
	annotation: annotationReducer,
	rootAnnotations: rootAnnotations,
	router: routerReducer
});
