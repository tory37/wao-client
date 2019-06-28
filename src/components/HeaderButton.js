import React from 'react';
import styled from '@emotion/styled';

const StyledHeaderButton = styled.div`
	/* width: 100px;
	height: 40px;
	margin-left: 20px;
	margin-right: 20px;
	position: relative; */

	background-color: black;
	width: 100px;
	height: 50px;
	clip-path: polygon(${props => props.clipPath});
	margin-left: 10px;
	margin-right: 10px;

	position: relative;
	z-index: 1;

	&:hover {
		transform-origin: bottom;
		transform: scale(1.2);
	}

	.inner {
		background-color: purple;
		width: 90%;
		height: 90%;
		position: absolute;
		top: 5px;
		left: 5px;
		clip-path: polygon(${props => props.clipPath});
		z-index: 2;

		color: white;

		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
`;

const HeaderButton = ({ title, clipPath }) => {
	return (
		<StyledHeaderButton clipPath={clipPath}>
			<div className="inner">
				<span className="title">{title}</span>
			</div>
		</StyledHeaderButton>
	);
};

export default HeaderButton;
