import { START_LOADING_EVENTS, STOP_LOADING_EVENTS } from 'store/isLoadingEvents/types';

const initialState = false;

export default ( state = initialState, action ) => {
	switch ( action.type ) {
		case START_LOADING_EVENTS:
			return true;
		case STOP_LOADING_EVENTS:
			return false;
		default:
			return state;
	}
};
