import React from 'react';
import styled from '@emotion/styled';

import SkewedBox from './SkewedBox';
import CenteredContent from './CenteredContent';

const StyledHeaderButton = styled.div`
	margin-left: 10px;
	margin-right: 10px;

	width: 115px;
	height: 60px;

	color: white;
`;

const HeaderButton = ({ title, clipPath }) => {
	return (
		<StyledHeaderButton clipPath={clipPath}>
			<SkewedBox clipPath={clipPath} color="#4d4d4d" shouldGrowOnHover>
				<CenteredContent>
					<span>{title}</span>
				</CenteredContent>
			</SkewedBox>
		</StyledHeaderButton>
	);
};

export default HeaderButton;
