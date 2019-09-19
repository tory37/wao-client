import { START_LOADING_AUTH, STOP_LOADING_AUTH } from '../actions/types';

const initialState = true;

export default (state = initialState, action) => {
	switch (action.type) {
		case START_LOADING_AUTH:
			return true;
		case STOP_LOADING_AUTH:
			return false;
		default:
			return state;
	}
};
