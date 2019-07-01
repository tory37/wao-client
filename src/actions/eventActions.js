import api from '../utils/api/events';

import { ADD_NEW_EVENT } from './types';
import { displaySuccessNotification, displayErrorNotification, displayLoadingNotification } from '../utils/notifications';

export const addNewEvent = event => ({
	type: ADD_NEW_EVENT,
	payload: event
});

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
