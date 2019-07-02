import axios from 'axios';

const fetchFutureEvents = () => {
	return axios.get('http://localhost:5000/api/events');
};

const fetchPastEvents = () => {
	return axios.get('http://localhost:5000/api/events?getPast=true');
}

const createEvent = eventData => {
	return axios.put('http://localhost:5000/api/events', eventData);
};

const updateEvent = event => {};

const deleteEvent = eventId => {};

const events = {
	fetchFutureEvents,
	fetchPastEvents,
	createEvent,
	updateEvent,
	deleteEvent
};

export default events;
