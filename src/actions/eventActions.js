import api from '../utils/api/events';

import { ADD_NEW_EVENTS, UPDATE_EVENT, SET_EVENTS, SET_HAS_FETCHED_PAST } from './types';
import { displaySuccessNotification, displayErrorNotification, displayLoadingNotification } from '../utils/notifications';

export const addNewEvents = event => ({
	type: ADD_NEW_EVENTS,
	payload: event
});

export const updateExistingEvent = (id, updatedEvent) => ({
	type: UPDATE_EVENT,
	payload: {
		updatedEvent,
		id
	}
});

export const setEvents = events => ({
	type: SET_EVENTS,
	payload: events
});

export const setHasFetchedPast = hasFetchedPast => ({
	type: SET_HAS_FETCHED_PAST,
	payload: hasFetchedPast
});

export const fetchFutureEvents = () => dispatch => {
	return api
		.fetchFutureEvents()
		.then(res => {
			dispatch(setEvents(res.data));
			return res.data;
		})
		.catch(err => {
			displayErrorNotification(err, 'Error fetching future events');
			throw err;
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
			throw err;
		});
};

export const createEvent = eventData => dispatch => {
	const notificationId = displayLoadingNotification('Saving event...');
	return api
		.createEvent(eventData)
		.then(res => {
			displaySuccessNotification('Event added successfully', notificationId);
			dispatch(addNewEvents([res.data]));
			return res.data;
		})
		.catch(err => {
			displayErrorNotification(err, 'Error creating event', notificationId);
			throw err;
		});
};

export const updateEvent = (id, eventData) => dispatch => {
	const notificationId = displayLoadingNotification('Updating event...');
	return api
		.updateEvent(id, eventData)
		.then(res => {
			displaySuccessNotification('Event updated successfully', notificationId);
			dispatch(updateExistingEvent(id, res.data));
			return res.data;
		})
		.catch(err => {
			displayErrorNotification(err, 'Error updating event', notificationId);
			throw err;
		});
};