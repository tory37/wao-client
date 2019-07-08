import setAuthToken from '../utils/auth';

import api from '../utils/api/auth';
import { routeDefs } from '../routeDefs';

import { SET_CURRENT_USER, USER_LOADING } from './types';
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
			displaySuccessNotification(res.data, notificationId);
			history.push(routeDefs.login);
		}) // re-direct to login on siccessful register
		.catch(err => {
			displayErrorNotification(err, 'Registration error occured. Plz contact admins', notificationId);
			throw err;
		});
};

// Login - get user token
export const loginUser = userData => (dispatch, history) => {
	const notificationId = displayLoadingNotification('Logging in...');
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
		.catch(err => {
			displayErrorNotification(err, 'Login error occured. Plz contact admins', notificationId);
			throw err;
		});
};

export const fetchUser = () => (dispatch, history) => {
	return api
		.fetchUser()
		.then(res => {
			const user = res.data;
			dispatch(setCurrentUser(user));
		})
		.catch(err => {
			displayErrorNotification(err, 'Error refreshing user information. Plz contact admins');
			throw err;
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

export const updateUserProfile = (userData, id) => dispatch => {
	const notificationId = displayLoadingNotification('Updating profile...');
	return api
		.updateUserProfile(userData, id)
		.then(res => {
			dispatch(setCurrentUser(res.data));
			displaySuccessNotification('Succesfully updated profile', notificationId);
		})
		.catch(err => {
			displayErrorNotification(err, 'Error updating profile', notificationId);
			throw err;
		});
};

export const updatePassword = (password, password2, id) => dispatch => {
	const notificationId = displayLoadingNotification('Updating password...');
	return api
		.updatePassword({ password, password2 }, id)
		.then(res => {
			const { token } = res.data;
			localStorage.setItem('jwtToken', token);
			// Set token to Auth header
			setAuthToken(token);
			displaySuccessNotification('Password updated.  You will need to relogin on other devices', notificationId);
		})
		.catch(err => {
			displayErrorNotification(err, 'Error updating password', notificationId);
			throw err;
		});
};

export const updatePasswordWithToken = (password, password2, token) => dispatch => {
	const notificationId = displayLoadingNotification('Updating password...');
	return api
		.updatePasswordWithToken(password, password2, token)
		.then(res => {
			displaySuccessNotification('Password updated.  Please login.', notificationId);
		})
		.catch(err => {
			displayErrorNotification(err, 'Error updating password', notificationId);
			throw err;
		});
};

export const resetPassword = email => dispatch => {
	const notificationId = displayLoadingNotification('Resetting password...');
	return api
		.resetPassword(email)
		.then(res => {
			displaySuccessNotification(res.data, notificationId);
		})
		.catch(err => {
			displayErrorNotification(err, 'There was an error sending a password reset', notificationId);
			throw err;
		});
};

export const verifyUser = verificationToken => dispatch => {
	const notificationId = displayLoadingNotification('Verifying user...');
	return api
		.verifyUser(verificationToken)
		.then(res => {
			displaySuccessNotification('Email verified! Please login', notificationId);
		})
		.catch(err => {
			displayErrorNotification(err, 'Error verifying email', notificationId);
			throw err;
		});
};

export const resendVerification = email => dispatch => {
	const notificationId = displayLoadingNotification('Resending verifiation email...');
	return api
		.resendVerification(email)
		.then(res => {
			displaySuccessNotification('Verification email sent! Please check your inbox (Check your spam)', notificationId);
		})
		.catch(err => {
			displayErrorNotification(err, 'Error sending verification email', notificationId);
			throw err;
		});
};
