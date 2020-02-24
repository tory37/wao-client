import React from 'react';
import styled from '@emotion/styled';

import PageWrapper from 'components/PageWrapper';
import PageCard from 'components/PageCard';

const StyledNotFound = styled.div`
	width: 100%;

	.notfound-content {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		padding-top: 20px;
		padding-bottom: 20px;

		.notfound-title {
			font-size: 28px;
			margin-bottom: 10px;

			span {
				font-size: 36px;
				color: red;
			}
		}

		.notfound-body {
			font-size: 18px;
		}
	}
`;

const NotFound = () => {
	return (
		<PageWrapper>
			<StyledNotFound>
				<PageCard isSkewed>
					<div className="notfound-content">
						<div className="notfound-title">
							<span>404</span> Not Found
						</div>
						<div className="notfound-body">Please use the navigation above.</div>
					</div>
				</PageCard>
			</StyledNotFound>
		</PageWrapper>
	);
};

export default NotFound;
