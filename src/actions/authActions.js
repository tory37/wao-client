import setAuthToken from '../utils/auth';

import api from '../utils/api/auth';

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types';
import { displaySuccessNotification, displayErrorNotification, displayLoadingNotification } from '../utils/notifications';

// Set logged in user
export const setCurrentUser = user => ({
	type: SET_CURRENT_USER,
	payload: user
});

// User loading
export const settUserLoading = () => ({
	type: USER_LOADING
});

// Register User
export const registerUser = (userData, history) => dispatch => {
	const notificationId = displayLoadingNotification('Signing up...');
	return api
		.registerUser(userData)
		.then(res => {
			displaySuccessNotification('You signed up! Welcome!', notificationId);
			history.push('/login');
		}) // re-direct to login on siccessful register
		.catch(err => {
			displayErrorNotification(err, notificationId);
		});
};

// Login - get user token
export const loginUser = userData => (dispatch, history) => {
	const notificationId = displayLoadingNotification('Loggin in...');
	return api
		.loginUser(userData)
		.then(res => {
			displaySuccessNotification('You are online!', notificationId);
			// Save to localStorage

			// Set token to localStorage
			const { token, user } = res.data;
			localStorage.setItem('jwtToken', token);
			// Set token to Auth header
			setAuthToken(token);
			// Decode token to get user data
			// const decoded = jwtDecode(token);
			// Set current user
			dispatch(setCurrentUser(user));
		})
		.catch(err => displayErrorNotification(err, notificationId));
};

export const fetchUser = () => (dispatch, history) => {
	return api
		.fetchUser()
		.then(res => {
			const user = res.data;
			dispatch(setCurrentUser(user));
		})
		.catch(err => {
			displayErrorNotification(err);
		});
};

// Log user out
export const logoutUser = () => dispatch => {
	// Remove token from local storage
	localStorage.removeItem('jwtToken');
	// Remove auth header for future requests
	setAuthToken(false);
	// Set current user to empty object {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}));
};
