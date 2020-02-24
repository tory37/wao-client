import TYPES from './types';

export const initialState: boolean = false;

export default (state = initialState, action: any) => {
  switch (action.type) {
    case TYPES.SET_SIDEBAR_OPEN:
      return true;
    case TYPES.SET_SIDEBAR_CLOSED:
      return false;
    default:
      return state;
  }
};
