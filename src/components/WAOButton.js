import React from 'react';
import styled from '@emotion/styled';

import SkewedBox from './SkewedBox';
import CenteredContent from './CenteredContent';

// 500 x 262
const StyledButton = styled.div`
	width: ${props => (props.xs ? '60px' : props.sm ? '70px' : props.md ? '80px' : props.lg ? '90px' : props.xl ? '100px' : props.xl2 ? '110px' : props.xl3 ? '120px' : '80px')};
	height: 40px;
	cursor: ${props => (props.isDisabled ? 'not-allowed' : 'pointer')};
`;

const WAOButton = ({ title, color, clickCallback, isDisabled, xs, sm, md, lg, xl, xl2, xl3 }) => {
	const onClick = () => {
		if (!isDisabled) {
			clickCallback();
		}
	};

	return (
		<div onClick={onClick}>
			<StyledButton xs={xs} sm={sm} md={md} lg={lg} xl={xl} xl2={xl2} xl3={xl3} isDisabled={isDisabled}>
				<SkewedBox clipPath="3% 0, 100% 0, 96% 100%, 0% 100%" shouldGrowOnHover fromCenter useScale color={color} isDisabled={isDisabled}>
					<CenteredContent>{title}</CenteredContent>
				</SkewedBox>
			</StyledButton>
		</div>
	);
};

export default WAOButton;
