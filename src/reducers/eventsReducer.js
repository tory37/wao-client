import { ADD_NEW_EVENT, SET_EVENTS } from '../actions/types';

const initialState = {
	events: []
};
export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_EVENT:
			return {
				events: [action, ...state.events]
			};
		case SET_EVENTS:
			console.log(action);
			return action.payload;
		default:
			return state;
	}
};
