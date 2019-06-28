import React from 'react';
import styled from '@emotion/styled';

const StyledCenteredContent = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const CenteredContent = ({ children }) => {
	return <StyledCenteredContent>{children}</StyledCenteredContent>;
};

export default CenteredContent;
