import { SET_HAS_FETCHED_PAST } from '../actions/types';

const initialState = false;

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_HAS_FETCHED_PAST:
            return {
                ...state,
                hasFetchedPast: action.payload
            };
        default:
        return state;
    }
}