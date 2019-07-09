import { combineReducers } from 'redux';
import auth from './auth';
import events from './events';
import isLoadingEvents from './isLoadingEvents';
import isLoadingAuth from './isLoadingAuth';

export default combineReducers({
	auth: auth,
	events: events,
	isLoadingEvents: isLoadingEvents,
	isLoadingAuth: isLoadingAuth
});
