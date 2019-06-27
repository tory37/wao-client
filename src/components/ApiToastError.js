import React from 'react';

const ApiToastError = ({ apiErrorPayload }) => {
  if (apiErrorPayload && apiErrorPayload.messages) {
    return (
      <div>
        {apiErrorPayload.messages.map((message, i) => (
          <div key={i}>{message}</div>
        ))}
      </div>
    );
  }

  return <div>Unknown Error</div>;
};

export default ApiToastError;
