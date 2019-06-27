import axios from 'axios';

const registerUser = userData => {
	return axios.post('/api/users/register', userData);
};

const loginUser = userData => {
	return axios.post('/api/users/login', userData);
};

const fetchUser = () => {
	return axios.get('/api/users');
};

const auth = {
	registerUser,
	loginUser,
	fetchUser
};

export default auth;
