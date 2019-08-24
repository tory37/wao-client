import React from 'react';
import styled from '@emotion/styled';
import { Link, withRouter } from 'react-router-dom';
import { routePaths, isOnRoute } from '../routeDefs';

import HeaderButton from './HeaderButton';
import UserStatus from './UserStatus';

const StyledHeader = styled.div`
	width: 100%;
	height: 100%;
	font-family: NinjaNaruto, Times, serif !important;
	margin-top: 10px;

	/* border-bottom: none; */
	border-bottom: solid 5px black;

	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: flex-end;
	flex-wrap: wrap;

	@media only screen and (min-width: 574px) {
		justify-content: flex-start;
	}

	a {
		text-decoration: none;
	}

	.header-logo-wrapper {
		width: 100%;
		text-align: center;

		@media only screen and (min-width: 574px) {
			width: 64px;
			margin-right: 10px;
		}

		.header-logo {
			width: 86px;

			&:hover {
				transform-origin: bottom;
				transform: scale(1.2);
			}
		}
	}

	.user-menu-wrapper {
		margin-bottom: 6px;

		@media only screen and (min-width: 574px) {
			margin-left: auto;
		}
	}
`;

const Header = ({ location }) => {
	return (
		<StyledHeader>
			<div className="header-logo-wrapper">
				<Link to={routePaths.home}>
					<img className="header-logo" alt="Weebs and Otakus Logo" src={process.env.PUBLIC_URL + '/img/logo_short.png'} />
					{/* <div className="header-title">{'Weebs And Otakus'}</div> */}
				</Link>
			</div>
			<Link to={routePaths.home}>
				<HeaderButton title="Home" clipPath="0 0, 99% 13%, 96% 100%, 7% 100%" isSelected={isOnRoute(location, routePaths.home)} />
			</Link>
			<Link to={routePaths.events}>
				<HeaderButton title="Events" clipPath="5% 17%, 96% 5%, 94% 100%, 7% 100%" isSelected={isOnRoute(location, routePaths.events)} />
			</Link>
			<Link to={routePaths.aboutUs}>
				<HeaderButton title="About" clipPath="5% 5%, 95% 11%, 92% 100%, 11% 100%" isSelected={isOnRoute(location, routePaths.aboutUs)} />
			</Link>
			<div className="user-menu-wrapper">
				<UserStatus isSelected={isOnRoute(location, routePaths.userProfile)} />
			</div>
		</StyledHeader>
	);
};

export default withRouter(Header);
