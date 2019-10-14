import { SET_SIDEBAR_OPEN, SET_SIDEBAR_CLOSED } from '../actions/types';

const initialState = false;

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_SIDEBAR_OPEN:
			return true;
		case SET_SIDEBAR_CLOSED:
			return false;
		default:
			return state;
	}
};
