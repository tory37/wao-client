import TYPES from './types';

export const createOpenSidebar = () => ({ type: TYPES.SET_SIDEBAR_OPEN });
export const createCloseSidebar = () => ({ type: TYPES.SET_SIDEBAR_CLOSED })

export const openSidebar = () => (dispatch: any) => {
  dispatch(createOpenSidebar());
}

export const closeSidebar = () => (dispatch: any) => {
  dispatch(createCloseSidebar());
}