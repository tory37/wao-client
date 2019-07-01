import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import eventsReducer from './eventsReducer';

export default combineReducers({
	auth: authReducer,
	errors: errorReducer,
	events: eventsReducer
});
