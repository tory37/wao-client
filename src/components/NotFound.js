import React from 'react';
import styled from '@emotion/styled';

import SkewedBox from './SkewedBox';
import CenteredContent from './CenteredContent';

const StyledNotFound = styled.div`
	.notfound-content {
		width: 300px;
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
		<StyledNotFound>
			<div className="page-content">
				<SkewedBox clipPath="0% 0, 100% 0, 100% 100%, 0% 100%" color="darkgray">
					<CenteredContent>
						<div className="notfound-content">
							<div className="notfound-title">
								<span>404</span> Not Found
							</div>
							<div className="notfound-body">Please use the navigation above.</div>
						</div>
					</CenteredContent>
				</SkewedBox>
			</div>
		</StyledNotFound>
	);
};

export default NotFound;
