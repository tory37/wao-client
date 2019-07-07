import React from 'react';
import styled from '@emotion/styled';

const StyledPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	margin: auto;
	max-width: 500px;
`;

const PageWrapper = ({ children }) => {
	return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
