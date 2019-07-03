import React from 'react';
import _ from 'lodash';
import { toast } from 'react-toastify';

const getContentFromRequestError = (error, defaultMessage) => {
	console.log(error);
	var messages = _.get(error, 'response.data.messages', [defaultMessage]);

	return (
		<div>
			{messages.map((message, i) => (
				<div key={i}>{message}</div>
			))}
		</div>
	);
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

const displayErrorNotification = (err, defaultMessage, toastId) => {
	if (toastId) {
		toast.update(toastId, {
			render: getContentFromRequestError(err, defaultMessage),
			type: toast.TYPE.ERROR,
			autoClose: null,
			closeOnClick: null,
			closeButton: null
		});
	} else {
		toast.error(getContentFromRequestError(err, defaultMessage));
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
