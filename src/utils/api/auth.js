import axios from 'axios';

const registerUser = userData => {
	return axios.post('localhost:5000/api/users/register', userData);
};

const loginUser = userData => {
	return axios.post('localhost:5000//api/users/login', userData);
};

const fetchUser = () => {
	return axios.get('localhost:5000//api/users');
};

const auth = {
	registerUser,
	loginUser,
	fetchUser
};

export default auth;
