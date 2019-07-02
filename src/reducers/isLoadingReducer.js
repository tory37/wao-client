import { SET_IS_LOADING } from '../actions/types';

const initialState = false;

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_IS_LOADING:
			return action;
		default:
			return state;
	}
}
