import { toast } from 'react-toastify';

const displayLoadingNotification = (content) => {
  const toastId = toast(content, {
    type: toast.TYPE.INFO,
    autoClose: false,
    closeButton: false,
    closeOnClick: false,
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
      closeButton: null,
    });
  } else {
    toast.success(content);
  }
};

const displayErrorNotification = (content, toastId) => {
  if (toastId) {
    toast.update(toastId, {
      render: content,
      type: toast.TYPE.ERROR,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
    });
  } else {
    toast.error(content);
  }
};

const displayWarningNotification = (content, toastId) => {
  if (toastId) {
    toast.update(toastId, {
      render: content,
      type: toast.TYPE.WARNING,
      autoClose: null,
      closeOnClick: null,
      closeButton: null,
    });
  } else {
    toast.warning(content);
  }
};

export {
  displayLoadingNotification,
  displaySuccessNotification,
  displayErrorNotification,
  displayWarningNotification,
};
