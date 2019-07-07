import React from 'react';
import styled from '@emotion/styled';

import SkewedBox from './SkewedBox';
import CenteredContent from './CenteredContent';
import LoadingOverlay from './LoadingOverlay';

const StyledPageCard = styled.div`
	width: 100%;
	height: 100%;
	padding: ${props => (props.isSkewed ? '10px 20px 10px 20px' : '10px')};
`;

const PageCard = ({ children, isLoading, isSkewed }) => {
	return (
		<SkewedBox clipPath={isSkewed ? '3% 0, 100% 0, 97% 100%, 0 100%' : '0 0, 100% 0, 100% 100%, 0 100%'} color="darkgray" isSelected>
			<CenteredContent>
				<LoadingOverlay isLoading={isLoading} />
				<StyledPageCard isSkewed={isSkewed}>{children}</StyledPageCard>
			</CenteredContent>
		</SkewedBox>
	);
};

export default PageCard;