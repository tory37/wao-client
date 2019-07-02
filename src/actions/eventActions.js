import api from '../utils/api/events';

import { ADD_NEW_EVENTS, SET_EVENTS, SET_HAS_FETCHED_PAST } from './types';
import { displaySuccessNotification, displayErrorNotification, displayLoadingNotification } from '../utils/notifications';

export const addNewEvents = event => ({
	type: ADD_NEW_EVENTS,
	payload: event
});

export const setEvents = events => ({
	type: SET_EVENTS,
	payload: events
});

export const setHasFetchedPast = hasFetchedPast => ({
	type: SET_HAS_FETCHED_PAST,
	payload: hasFetchedPast
})

export const fetchFutureEvents = () => dispatch => {
	return api
		.fetchFutureEvents()
		.then(res => {
			dispatch(setEvents(res.data));
			return res.data;
		})
		.catch(err => {
			displayErrorNotification(err, 'Error fetching future events');
			return err;
		});
};

export const fetchPastEvents = () => dispatch => {
	const notificationId = displayLoadingNotification('Fetching past events...');
	return api
		.fetchPastEvents()
		.then(res => {
			dispatch(addNewEvents(res.data));
			dispatch(setHasFetchedPast(true));
			displaySuccessNotification('Past events achieved!', notificationId);
			return res.data;
		})
		.catch(err => {
			displayErrorNotification(err, 'Error fetching past events');
			return err;
		});
};

export const createEvent = eventData => dispatch => {
	console.log('creating event');
	const notificationId = displayLoadingNotification('Saving event...');
	return api
		.createEvent(eventData)
		.then(res => {
			displaySuccessNotification('Event save successfully', notificationId);
			dispatch(addNewEvents(res.data));
			return res.data;
		})
		.catch(err => {
			displayErrorNotification(err, 'Error creating event', notificationId);
			return err;
		});
};
