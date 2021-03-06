import React from 'react';
import styled from '@emotion/styled';

const borderWidth = '5px';

const StyledSkewedBox = styled.div`
	background-color: black;
	width: ${props => (props.isSelected && !props.useScale ? '100%' : '90%')};
	height: ${props => (props.isSelected && !props.useScale ? '100%' : '90%')};
	padding: ${props => props.borderWidth};
	clip-path: polygon(${props => props.clipPath});
	margin: auto;

	position: relative;

	transform-origin: ${props => (props.fromCenter ? 'center' : 'bottom')};
	transform: scale(${props => (props.isSelected && props.useScale ? 1.2 : 1)});

	&:hover {
		transform: scale(${props => (!props.isDisabled && (props.shouldGrowOnHover || props.isSelected) && props.useScale ? 1.2 : 1)});
		width: ${props => (!props.isDisabled && (props.shouldGrowOnHover || props.isSelected) && !props.useScale ? '100%' : '90%')};
		height: ${props => (!props.isDisabled && (props.shouldGrowOnHover || props.isSelected) && !props.useScale ? '100%' : '90%')};
	}

	& > .skewedbox-inner {
		background-color: ${props => (props.isDisabled ? 'black' : props.color)};
		width: 100%;
		height: 100%;
		clip-path: polygon(${props => props.clipPath});
	}
`;

const SkewedBox = ({ children, clipPath, color, shouldGrowOnHover, isSelected, fromCenter, useScale, isDisabled }) => {
	return (
		<StyledSkewedBox clipPath={clipPath} borderWidth={borderWidth} color={color} shouldGrowOnHover={shouldGrowOnHover} isSelected={isSelected} fromCenter={fromCenter} useScale={useScale} isDisabled={isDisabled}>
			<div className="skewedbox-inner">{children}</div>
		</StyledSkewedBox>
	);
};

export default SkewedBox;
