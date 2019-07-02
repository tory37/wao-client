import { ADD_NEW_EVENTS, SET_EVENTS } from '../actions/types';
import _ from 'lodash';

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_EVENTS:
			return _.uniqBy([...state, ...action.payload], '_id');
		case SET_EVENTS:
			return action.payload.length <= 1 ? action.payload : _.orderBy(_.uniqBy(action.payload, '_id'), ['startTimestamp'], ['desc']);
		default:
			return state;
	}
};
