import { ADD_NEW_EVENT } from '../actions/types';

const initialState = {
	events: []
};
export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_EVENT:
			console.log('Add reducer hit');
			return {
				...state,
				events: [action, ...state.events]
			};
		default:
			return state;
	}
};
