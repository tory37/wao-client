import { combineReducers } from 'redux';
import authReducer from './authReducer';
import eventsReducer from './eventsReducer';
import hasFetchedPast from './hasFetchedPastReducer';
import isLoadingReducer from './isLoadingReducer';
import loadingEventsReducer from './loadingEventsReducer';

export default combineReducers({
	auth: authReducer,
	events: eventsReducer,
	isLoading: isLoadingReducer,
	hasFetchedPast: hasFetchedPast,
	isLoadingEvents: loadingEventsReducer
});
