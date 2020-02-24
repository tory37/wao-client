import { ADD_NEW_EVENTS, UPDATE_EVENT, SET_EVENTS } from 'store/events/types';
import _ from 'lodash';

const initialState = [];

const orderEvents = events => {
	return _.orderBy( _.uniqBy( events, '_id' ), [ 'startTimestamp' ], [ 'desc' ] );
};

export default ( state = initialState, action ) => {
	switch ( action.type ) {
		case ADD_NEW_EVENTS:
			return orderEvents( [ ...state, ...action.payload ] );
		case UPDATE_EVENT:
			let newState = _.clone( state );
			let index = _.findIndex( newState, { _id: action.payload.id } );
			if ( index > -1 ) {
				newState[ index ] = action.payload.updatedEvent;
				return orderEvents( newState );
			} else {
				return orderEvents( [ ...newState, ...action.payload.updatedEvent ] );
			}
		case SET_EVENTS:
			return action.payload.length <= 1 ? action.payload : orderEvents( action.payload );
		default:
			return state;
	}
};
