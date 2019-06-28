import React from 'react';
import styled from '@emotion/styled';

import HeaderButton from './HeaderButton';

const StyledHeader = styled.div`
	width: 100%;
	padding-top: 20px;
	border: solid 5px black;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-end;
	background-color: red;
`;

const Header = () => {
	return (
		<StyledHeader>
			<HeaderButton title="Home" clipPath="0 0, 99% 13%, 96% 100%, 7% 100%" />
			<HeaderButton title="Events" clipPath="3% 17%, 96% 5%, 94% 100%, 7% 100%" />
			<HeaderButton title="Gallery" clipPath="5% 5%, 95% 11%, 92% 100%, 15% 100%" />
		</StyledHeader>
	);
};

export default Header;
