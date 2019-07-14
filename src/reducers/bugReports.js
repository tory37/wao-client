import { SET_BUG_REPORTS, ADD_BUG_REPORT, UPDATE_BUG_REPORT } from '../actions/types';
import _ from 'lodash';

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_BUG_REPORT:
			return [...state, ...action.payload];
		case SET_BUG_REPORTS:
			return action.payload;
		case UPDATE_BUG_REPORT:
			let newState = _.clone(state);
			let index = _.findIndex(newState, { _id: action.payload._id });
			if (index > -1) {
				newState[index] = action.payload;
				return newState;
			} else {
				return [...newState, action.payload];
			}
		default:
			return state;
	}
};
