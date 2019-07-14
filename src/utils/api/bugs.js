import axios from 'axios';

const bugs = {};

bugs.fetchAllBugReports = () => {
	const url = `${process.env.REACT_APP_API_URL}/bugs`;
	return axios.get(url);
};

bugs.createBugReport = bugData => {
	return axios.put(`${process.env.REACT_APP_API_URL}/bugs`, bugData);
};

bugs.setOpen = bugReportId => {
	const url = `${process.env.REACT_APP_API_URL}/bugs/open/${bugReportId}`;
	return axios.post(url);
};

bugs.setFixed = bugReportId => {
	const url = `${process.env.REACT_APP_API_URL}/bugs/fix/${bugReportId}`;
	return axios.post(url);
};

bugs.setRejected = bugReportId => {
	const url = `${process.env.REACT_APP_API_URL}/bugs/reject/${bugReportId}`;
	return axios.post(url);
};

// const updateBugReport = (id, eventData) => {
// 	return axios.put(`${process.env.REACT_APP_API_URL}/events/${id}`, eventData);
// };

export default bugs;
