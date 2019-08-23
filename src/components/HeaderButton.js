import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import SkewedBox from './SkewedBox';
import CenteredContent from './CenteredContent';

const StyledHeaderButton = styled.div`
	width: 80px;
	height: 40px;
	font-size: 11px;
	margin-bottom: 6px;

	@media only screen and (min-width: 574px) {
		width: 120px;
		height: 60px;
		margin-left: 10px;
		margin-right: 10px;
	}

	color: white;
`;

const HeaderButton = ({ auth, title, clipPath, isSelected }) => {
	return (
		<StyledHeaderButton clipPath={clipPath}>
			<SkewedBox clipPath={clipPath} color={isSelected ? (auth.isAuthenticated && auth.user.color ? auth.user.color : 'red') : 'gray'} isSelected={isSelected} shouldGrowOnHover useScale={true}>
				<CenteredContent>
					<span>{title}</span>
				</CenteredContent>
			</SkewedBox>
		</StyledHeaderButton>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(HeaderButton);
