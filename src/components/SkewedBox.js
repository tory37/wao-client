import React from 'react';
import styled from '@emotion/styled';

const borderWidth = '5px';

const StyledSkewedBox = styled.div`
	background-color: black;
	width: 100%;
	height: 100%;
	clip-path: polygon(${props => props.clipPath});

	position: relative;
	z-index: 1;

	.inner {
		background-color: ${props => props.color};
		width: calc(100% - (${props => props.borderWidth} * 2));
		height: calc(100% - (${props => props.borderWidth} * 2));
		position: absolute;
		top: ${props => props.borderWidth};
		left: ${props => props.borderWidth};
		clip-path: polygon(${props => props.clipPath});
		z-index: 2;
	}
`;

const SkewedBox = ({ children, clipPath, color }) => {
	return (
		<StyledSkewedBox clipPath={clipPath} borderWidth={borderWidth} color={color}>
			<div className="inner">{children}</div>
		</StyledSkewedBox>
	);
};

export default SkewedBox;
