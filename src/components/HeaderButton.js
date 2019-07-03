import React from 'react';
import styled from '@emotion/styled';

import SkewedBox from './SkewedBox';
import CenteredContent from './CenteredContent';

const StyledHeaderButton = styled.div`
	width: 80px;
	height: 40px;
	font-size: 11px;

	@media only screen and (min-width: 410px) {
		width: 100px;
		height: 45px;
		font-size: 14px;
	}

	@media only screen and (min-width: 500px) {
		width: 120px;
		height: 50px;
		font-size: 16px;
	}

	@media only screen and (min-width: 835px) {
		width: 120px;
		height: 60px;
		margin-left: 10px;
		margin-right: 10px;
	}

	color: white;
`;

const HeaderButton = ({ title, clipPath, isSelected }) => {
	return (
		<StyledHeaderButton clipPath={clipPath}>
			<SkewedBox clipPath={clipPath} color={isSelected ? 'purple' : '#4d4d4d'} isSelected={isSelected} shouldGrowOnHover useScale={true}>
				<CenteredContent>
					<span>{title}</span>
				</CenteredContent>
			</SkewedBox>
		</StyledHeaderButton>
	);
};

export default HeaderButton;
