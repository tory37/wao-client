import { combineReducers } from 'redux';
import auth from './auth/reducer';
import events from './events/reducer';
import isLoadingEvents from './isLoadingEvents/reducer';
import isLoadingAuth from './isLoadingAuth/reducer';
import bugReports from './bugReports/reducer';
import sidebar from './sidebar/reducer';

export default combineReducers( {
	auth: auth,
	events: events,
	isLoadingEvents: isLoadingEvents,
	isLoadingAuth: isLoadingAuth,
	bugReports: bugReports,
	sidebar: sidebar
} );
