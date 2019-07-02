import { SET_IS_LOADING } from './types';

export const setIsLoading = isLoading => ({
	type: SET_IS_LOADING,
	payload: event
});

export const setIsLoading = isLoading => dispatch => {
	dispatch(setIsLoading(isLoading));
};