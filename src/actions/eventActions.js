import api from '../utils/api/events';

import { ADD_NEW_EVENT, SET_EVENTS } from './types';
import { displaySuccessNotification, displayErrorNotification, displayLoadingNotification } from '../utils/notifications';

export const addNewEvent = event => ({
	type: ADD_NEW_EVENT,
	payload: event
});

export const setEvents = events => ({
    type: SET_EVENTS,
    payload: events
});

export const fetchFutureEvents = () => dispatch => {
    return api
        .fetchFutureEvents()
        .then(res => {
            dispatch(setEvents(res.data));
            return res.data;
        })
        .catch(err => {
            displayErrorNotification(err);
            return err;
        });
}

export const createEvent = eventData => dispatch => {
	console.log('creating event');
	const notificationId = displayLoadingNotification('Saving event...');
	return api
		.createEvent(eventData)
		.then(res => {
			displaySuccessNotification('Event save successfully', notificationId);
			dispatch(addNewEvent(res.data));
			return res.data;
		})
		.catch(err => {
			displayErrorNotification(err, notificationId);
			return err;
		});
};
