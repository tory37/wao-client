import axios from 'axios';

const fetchAllEvents = () => {
	const url = `${process.env.REACT_APP_API_URL}/events`;
	return axios.get(url, {timeout: 5000});
}

const fetchFutureEvents = () => {
	const url = `${process.env.REACT_APP_API_URL}/events/future`;
	return axios.get(url, {timeout: 5000});
};

const fetchPastEvents = () => {
	const url = `${process.env.REACT_APP_API_URL}/events/past`;
	return axios.get(url, {timeout: 5000});
};

const createEvent = eventData => {
	return axios.put(`${process.env.REACT_APP_API_URL}/events`, eventData);
};

const updateEvent = (id, eventData) => {
	return axios.put(`${process.env.REACT_APP_API_URL}/events/${id}`, eventData);
};

const deleteEvent = eventId => {};

const events = {
	fetchAllEvents,
	fetchFutureEvents,
	fetchPastEvents,
	createEvent,
	updateEvent,
	deleteEvent
};

export default events;
