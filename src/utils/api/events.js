import axios from 'axios';

const fetchFutureEvents = () => {
	return axios.get('http://localhost:5000/api/events');
};

const fetchPastEvents = () => {
	return axios.get(`${process.env.REACT_APP_API_URL}/events?getPast=true`);
};

const createEvent = eventData => {
	return axios.put(`${process.env.REACT_APP_API_URL}/events`, eventData);
};

const updateEvent = (id, eventData) => {
	return axios.put(`${process.env.REACT_APP_API_URL}/events/${id}`, eventData);
};

const deleteEvent = eventId => {};

const events = {
	fetchFutureEvents,
	fetchPastEvents,
	createEvent,
	updateEvent,
	deleteEvent
};

export default events;
