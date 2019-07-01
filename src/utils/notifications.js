import React from 'react';
import { toast } from 'react-toastify';

const getContentFromRequestError = error => {
	console.log(error);
	if (error && error.response && error.response.data && error.response.data.messages) {
		return (
			<div>
				{error.response.data.messages.map((message, i) => (
					<div key={i}>{message}</div>
				))}
			</div>
		);
	}

	return <div>Unknown Error</div>;
};

const displayLoadingNotification = content => {
	const toastId = toast(content, {
		type: toast.TYPE.INFO,
		autoClose: false,
		closeButton: false,
		closeOnClick: false
	});
	return toastId;
};

const displaySuccessNotification = (content, toastId) => {
	if (toastId) {
		toast.update(toastId, {
			render: content,
			type: toast.TYPE.SUCCESS,
			autoClose: null,
			closeOnClick: null,
			closeButton: null
		});
	} else {
		toast.success(content);
	}
};

const displayErrorNotification = (err, toastId) => {
	if (toastId) {
		toast.update(toastId, {
			render: getContentFromRequestError(err),
			type: toast.TYPE.ERROR,
			autoClose: null,
			closeOnClick: null,
			closeButton: null
		});
	} else {
		toast.error(getContentFromRequestError(err));
	}
};

const displayWarningNotification = (content, toastId) => {
	if (toastId) {
		toast.update(toastId, {
			render: content,
			type: toast.TYPE.WARNING,
			autoClose: null,
			closeOnClick: null,
			closeButton: null
		});
	} else {
		toast.warning(content);
	}
};

export { displayLoadingNotification, displaySuccessNotification, displayErrorNotification, displayWarningNotification };
