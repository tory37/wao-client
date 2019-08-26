import setAuthToken from '../utils/auth';

import bugs from '../utils/api/bugs';

import { SET_BUG_REPORTS, ADD_BUG_REPORT, UPDATE_BUG_REPORT } from './types';
import { displaySuccessNotification, displayErrorNotification, displayLoadingNotification } from '../utils/notifications';

export const setBugReports = bugReports => ({
	type: SET_BUG_REPORTS,
	payload: bugReports
});

export const addBugReport = bugReport => ({
	type: ADD_BUG_REPORT,
	payload: bugReport
});

export const updateBugReport = updatedBugReport => ({
	type: UPDATE_BUG_REPORT,
	payload: updatedBugReport
});

export const fetchAllBugReports = () => dispatch => {
	//const notificationId = displayLoadingNotification('Fetching bug reports...');
	return bugs
		.fetchAllBugReports()
		.then(res => {
			//displaySuccessNotification('Successfully got reports', notificationId);
			dispatch(setBugReports(res.data));
		}) // re-direct to login on siccessful register
		.catch(err => {
			displayErrorNotification(err, 'Failed to fetch bug reports');
			throw err;
		});
};

export const addNewBugReport = bugReport => dispatch => {
	const notificationId = displayLoadingNotification('Saving bug report...');
	return bugs
		.addBugReport(bugReport)
		.then(res => {
			displaySuccessNotification('Successfully reported bug', notificationId);
			//dispatch(addBugReport(bugReport));
		}) // re-direct to login on siccessful register
		.catch(err => {
			displayErrorNotification(err, 'Failed to save bug reports', notificationId);
			throw err;
		});
};

export const setOpen = bugReportId => dispatch => {
	const notificationId = displayLoadingNotification('Updating bug reports...');
	return bugs
		.setOpen(bugReportId)
		.then(res => {
			displaySuccessNotification('Successfully updated bug report', notificationId);
			dispatch(updateBugReport(res.data));
		}) // re-direct to login on siccessful register
		.catch(err => {
			displayErrorNotification(err, 'Failed to fetch bug reports', notificationId);
			throw err;
		});
};

export const setFixed = bugReportId => dispatch => {
	const notificationId = displayLoadingNotification('Updating bug reports...');
	return bugs
		.setFixed(bugReportId)
		.then(res => {
			displaySuccessNotification('Successfully updated bug report', notificationId);
			dispatch(updateBugReport(res.data));
		}) // re-direct to login on siccessful register
		.catch(err => {
			displayErrorNotification(err, 'Failed to fetch bug reports', notificationId);
			throw err;
		});
};

export const setRejected = bugReportId => dispatch => {
	const notificationId = displayLoadingNotification('Updating bug reports...');
	return bugs
		.setRejected(bugReportId)
		.then(res => {
			displaySuccessNotification('Successfully updated bug report', notificationId);
			dispatch(updateBugReport(res.data));
		}) // re-direct to login on siccessful register
		.catch(err => {
			displayErrorNotification(err, 'Failed to fetch bug reports', notificationId);
			throw err;
		});
};
