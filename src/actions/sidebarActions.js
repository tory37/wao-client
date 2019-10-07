import { SET_SIDEBAR_OPEN, SET_SIDEBAR_CLOSED } from './types';

export const setSidebarOpen = () => ({
	type: SET_SIDEBAR_OPEN
});

export const setSidebarClosed = () => ({
    type: SET_SIDEBAR_CLOSED
})

export const openSidebar = () => dispatch => {
    console.log("Opening sidebar");
	dispatch(setSidebarOpen());
};

export const closeSidebar = () => dispatch => {
    console.log("Closing Sidebar");
    dispatch(setSidebarClosed());
}