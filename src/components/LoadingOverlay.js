import React from 'react';
import styled from '@emotion/styled';

import Loading from './Loading';
import CenteredContent from './CenteredContent';

const StyledLoadingOverlay = styled.div`
	position: absolute;
	z-index: 1000;
	width: ${props => (props.isLoading ? '100%' : 0)};
	height: ${props => (props.isLoading ? '100%' : 0)};

	.loadingoverlay-inner {
		width: 100%;
		height: 100%;

		background-color: rgba(0, 0, 0, 0.7);
	}
`;

const LoadingOverlay = ({ isLoading }) => {
	return (
		<StyledLoadingOverlay isLoading={isLoading}>
			{isLoading && (
				<div className="loadingoverlay-inner">
					<CenteredContent>
						<Loading isLoading={isLoading} />
					</CenteredContent>
				</div>
			)}
		</StyledLoadingOverlay>
	);
};

export default LoadingOverlay;
