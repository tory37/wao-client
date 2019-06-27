const getErrorPayload = (apiError) => {
  if (apiError.response && apiError.response.data) {
    let payload = apiError.response.data;
    if (!payload.messages) {
      payload = {};
      payload.messages = ['The server made an error.'];
    }
    return payload;
  }

  return { messages: ['Server not responding.'] };
};

export { getErrorPayload };
