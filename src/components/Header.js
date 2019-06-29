import React from 'react';
import styled from '@emotion/styled';
import { Link, withRouter } from 'react-router-dom';

import HeaderButton from './HeaderButton';
import SkewedBox from './SkewedBox';

const padding = '10px';

const StyledHeader = styled.div`
	width: 100%;
	height: 100%;
	font-family: NinjaNaruto, Times, serif !important;

	border-bottom: solid 5px black;

	@media only screen and (min-width: 810px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
	}

	a {
		text-decoration: none;
	}

	.header-title {
		color: white;
		font-size: 36px;
		text-align: center;
		margin-top: 20px;

		:hover {
			transform: scale(1.02);
			transform-origin: bottom;
		}
	}

	.header-buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-end;
		margin-bottom: -5px;
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<Link to="/">
				<div className="header-title">{'Weebs And Otakus'}</div>
			</Link>
			<div className="header-buttons">
				<Link to="/">
					<HeaderButton title="Home" clipPath="0 0, 99% 13%, 96% 100%, 7% 100%" />
				</Link>
				<Link to="/events">
					<HeaderButton title="Events" clipPath="3% 17%, 96% 5%, 94% 100%, 7% 100%" />
				</Link>
				<Link to="/gallery">
					<HeaderButton title="Gallery" clipPath="5% 5%, 95% 11%, 92% 100%, 15% 100%" />
				</Link>
			</div>
		</StyledHeader>
	);
};

export default withRouter(Header);
