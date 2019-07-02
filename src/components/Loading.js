import React from 'react';
import styled from '@emotion/styled';

const Loading = isLoading => {
	if (isLoading) {
		return <i className="fas fa-spinner fa-spin"></i>;
	}

	return;
};

export default Loading;
