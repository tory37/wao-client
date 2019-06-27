import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React from 'react';
import setAuthToken from '../utils/auth';

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types';
import {
  displaySuccessNotification,
  displayErrorNotification,
  displayLoadingNotification,
} from '../utils/notifications';
import { getErrorPayload } from '../utils/apiErrors';
import ApiToastError from '../components/ApiToastError';

// Set logged in user
export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
});

// User loading
export const settUserLoading = () => ({
  type: USER_LOADING,
});

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  const notificationId = displayLoadingNotification('Signing up...');
  axios
    .post('/api/users/register', userData)
    .then((res) => {
      displaySuccessNotification('You signed up! Welcome!', notificationId);
      history.push('/login');
    }) // re-direct to login on siccessful register
    .catch((err) => {
      const errorPayload = getErrorPayload(err);
      displayErrorNotification(
        <ApiToastError apiErrorPayload={errorPayload} />,
        notificationId,
      );
      dispatch({
        type: GET_ERRORS,
        payload: errorPayload,
      });
    });
};

// Login - get user token
export const loginUser = userData => (dispatch, history) => {
  axios
    .post('/api/users/login', userData)
    .then((res) => {
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
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};

export const fetchUser = () => (dispatch, history) => {
  axios.get('/api/users').then((res) => {
    const user = res.data;
    dispatch(setCurrentUser(user));
  });
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
