import _ from 'lodash';
import { SET_CURRENT_USER, USER_LOADING } from '../actions/types';

const initialState = {
	isAuthenticated: false,
	user: {},
	loading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !_.isEmpty(action.payload),
				isAdmin: _.includes(action.payload.roles, 'ADMIN'),
				user: { ...action.payload, color: 'red' }
			};
		case USER_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};
