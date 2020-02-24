import { combineReducers } from 'redux';
import auth from '../reducers/auth';
import events from '../reducers/events';
import isLoadingEvents from '../reducers/isLoadingEvents';
import isLoadingAuth from '../reducers/isLoadingAuth';
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
