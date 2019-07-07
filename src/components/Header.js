import React from 'react';
import styled from '@emotion/styled';
import { Link, withRouter } from 'react-router-dom';
import {routeDefs, isOnRoute} from '../routeDefs';

import HeaderButton from './HeaderButton';
import UserStatus from './UserStatus';

const StyledHeader = styled.div`
	width: 100%;
	height: 100%;
	font-family: NinjaNaruto, Times, serif !important;

	border-bottom: solid 5px black;

	@media only screen and (min-width: 410px) {
		padding-bottom: 60px;
	}

	@media only screen and (min-width: 945px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		padding-bottom: 0;
	}

	a {
		text-decoration: none;
	}

	.header-title {
		color: white;
		font-size: 25px;
		text-align: center;
		margin-top: 20px;
		padding-bottom: 0px;

		@media only screen and (min-width: 500px) {
			font-size: 36px;
			margin-bottom: 15px;
		}

		@media only screen and (min-width: 945px) {
			padding-bottom: 0;
			margin-bottom: 0;
		}

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
		padding-left: 5px;
		padding-right: 5px;

		@media only screen and (min-width: 500px) {
			margin-top: -10px;
		}

		@media only screen and (min-width: 945px) {
			margin-top: 0;
			margin-bottom: -10px;
		}
	}
`;

const Header = ({ location }) => {
	return (
		<StyledHeader>
			<Link to="/">
				<div className="header-title">{'Weebs And Otakus'}</div>
			</Link>
			<div className="header-buttons">
				<Link to={routeDefs.home}>
					<HeaderButton title="Home" clipPath="0 0, 99% 13%, 96% 100%, 7% 100%" isSelected={isOnRoute(location, routeDefs.home)} />
				</Link>
				<Link to={routeDefs.events}>
					<HeaderButton title="Events" clipPath="5% 17%, 96% 5%, 94% 100%, 7% 100%" isSelected={isOnRoute(location, routeDefs.events)} />
				</Link>
				<Link to={routeDefs.photos}>
					<HeaderButton title="photos" clipPath="5% 5%, 95% 11%, 92% 100%, 11% 100%" isSelected={isOnRoute(location, routeDefs.photos)} />
				</Link>
				<div className="user-menu-wrapper">
					<UserStatus isSelected={isOnRoute(location, routeDefs.userProfile)} />
				</div>
			</div>
		</StyledHeader>
	);
};

export default withRouter(Header);
