import axios from 'axios';

const getEvents = () => {};

const createEvent = eventData => {
	return axios.put('http://localhost:5000/api/events', eventData);
};

const updateEvent = event => {};

const deleteEvent = eventId => {};

const events = {
	getEvents,
	createEvent,
	updateEvent,
	deleteEvent
};

export default events;
