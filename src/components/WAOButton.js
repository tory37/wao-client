import React from 'react';
import styled from '@emotion/styled';

import SkewedBox from './SkewedBox';
import CenteredContent from './CenteredContent';
import Loading from './Loading';

// 500 x 262
const StyledButton = styled.div`
	width: ${props => (props.xs ? '60px' : props.sm ? '70px' : props.md ? '80px' : props.lg ? '90px' : props.xl ? '100px' : props.xl2 ? '110px' : props.xl3 ? '120px' : props.xl4 ? '130px' : props.xl5 ? '140px' : props.xl6 ? '150px' : props.xl7 ? '160px' : '80px')};
	height: 40px;
	cursor: ${props => (props.isDisabled ? 'not-allowed' : 'pointer')};

	.waobutton-title {
		font-size: ${props => (props.isLoading ? '12px' : '16px')};
		margin-right: ${props => (props.isLoading ? '5px' : 0)};
	}
`;

const WAOButton = ({ title, color, clickCallback, isDisabled, isLoading, xs, sm, md, lg, xl, xl2, xl3, xl4, xl5, xl6, xl7 }) => {
	const onClick = () => {
		if (!isDisabled) {
			clickCallback();
		}
	};

	return (
		<div onClick={onClick}>
			<StyledButton xs={xs} sm={sm} md={md} lg={lg} xl={xl} xl2={xl2} xl3={xl3} xl4={xl4} xl5={xl5} xl6={xl6} xl7={xl7} isDisabled={isDisabled} isLoading={isLoading}>
				<SkewedBox clipPath="3% 0, 100% 0, 96% 100%, 0% 100%" shouldGrowOnHover fromCenter useScale color={color} isDisabled={isDisabled}>
					<CenteredContent>
						<span className="waobutton-title">{title}</span>
						{isLoading && (
							<div className="waobutton-loading">
								<Loading />
							</div>
						)}
					</CenteredContent>
				</SkewedBox>
			</StyledButton>
		</div>
	);
};

export default WAOButton;
