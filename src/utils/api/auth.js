import axios from 'axios';

const registerUser = userData => {
	console.log(process.env);
	return axios.post(`${process.env.REACT_APP_API_URL}/users/register`, userData);
};

const loginUser = userData => {
	return axios.post(`${process.env.REACT_APP_API_URL}/users/login`, userData);
};

const fetchUser = () => {
	return axios.get(`${process.env.REACT_APP_API_URL}/users`);
};

const authApi = {
	registerUser,
	loginUser,
	fetchUser
};

export default authApi;
