import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import eventsReducer from './eventsReducer';
import hasFetchedPast from './hasFetchedPastReducer';
import isLoadingReducer from './isLoadingReducer';
import loadingEventsReducer from './loadingEventsReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	events: eventsReducer,
	isLoading: isLoadingReducer,
	hasFetchedPast: hasFetchedPast,
	isLoadingEvents:  loadingEventsReducer
});
