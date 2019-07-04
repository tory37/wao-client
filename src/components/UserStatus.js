import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { logoutUser as logoutUserAction } from '../actions/authActions';

import SkewedBox from './SkewedBox';
import CenteredContent from './CenteredContent';
import WAOButton from './WAOButton';
import Img from 'react-image';

const defaultProfileImage = 'https://upload.wikimedia.org/wikipedia/commons/2/25/Wikipe-tan_silhouette.png';

const StyledUserStatus = styled.div`
	width: 45px;
	height: 45px;

	@media only screen and (min-width: 410px) {
		width: 50px;
		height: 50px;
	}

	@media only screen and (min-width: 500px) {
		width: 60px;
		height: 60px;
	}

	.usestatus-content {
		width: 100%;
		height: 100%;
		position: relative;

		.userstatus-profile-image {
			width: 100%;
			height: 100%;
			cursor: pointer;

			img {
				width: 100%;
				height: 100%;
			}
		}

		.userstatus-buttondropdown {
			position: absolute;
			top: 60px;
			right: 0;
			z-index: 1000;

			.userstatus-buttondropdown-inner {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-items: center;
				padding: 10px 15px 5px 15px;

				.userstatus-buttondropdown-entry {
					margin-bottom: 5px;
				}
			}
		}

		color: white;
	}
`;

const UserStatus = ({ isSelected, auth, logoutUser, history }) => {
	const [isOpen, setIsOpen] = useState(false);

	const userImage = useRef();
	const buttonDropdown = useRef();

	useEffect(() => {
		// add when mounted
		document.addEventListener('mousedown', handleClick);

		// return function to be called when unmounted
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [isOpen]);

	const onProfileClick = e => {
		history.push('/profile');
		setIsOpen(false);
	};

	const onLogoutClick = e => {
		logoutUser();
		setIsOpen(false);
	};

	const onLoginClick = e => {
		history.push('/login');
		setIsOpen(false);
	};

	const onSignupClick = e => {
		history.push('/signup');
		setIsOpen(false);
	};

	const handleClick = e => {
		if (userImage.current.contains(e.target)) {
			if (isOpen) {
				setIsOpen(false);
				return;
			}
			setIsOpen(true);
			// inside click
			return;
		} else if (buttonDropdown && buttonDropdown.current && !buttonDropdown.current.contains(e.target)) {
			// outside click
			if (isOpen) {
				setIsOpen(false);
			}
		}
	};

	return (
		<StyledUserStatus>
			<div className="usestatus-content">
				<div className="userstatus-profile-image" ref={userImage}>
					<SkewedBox shouldGrowOnHover useScale isSelected={isSelected}>
						<Img src={auth.isAuthenticated && auth.user.imageUrl && auth.user.imageUrl.length > 0 ? auth.user.imageUrl : defaultProfileImage} />
					</SkewedBox>
				</div>

				{isOpen && (
					<div className="userstatus-buttondropdown" ref={buttonDropdown}>
						<SkewedBox color="darkgray" clipPath="0 6%, 100% 0, 100% 96%, 0% 100%">
							{auth.isAuthenticated && (
								<div className="userstatus-buttondropdown-inner">
									<div className="userstatus-buttondropdown-entry">{auth.user.username}</div>
									<div className="userstatus-buttondropdown-entry">
										<WAOButton color="green" title="Profile" clickCallback={onProfileClick} xl3></WAOButton>
									</div>
									<div className="userstatus-buttondropdown-entry">
										<WAOButton color="Purple" title="Logout" clickCallback={onLogoutClick} xl3></WAOButton>
									</div>
								</div>
							)}

							{!auth.isAuthenticated && (
								<div className="userstatus-buttondropdown-inner">
									<div className="userstatus-buttondropdown-entry">
										<WAOButton color="green" title="Login" clickCallback={onLoginClick} xl3></WAOButton>
									</div>
									<div className="userstatus-buttondropdown-entry">
										<WAOButton color="Blue" title="Signup" clickCallback={onSignupClick} xl3></WAOButton>
									</div>
								</div>
							)}
						</SkewedBox>
					</div>
				)}
			</div>
		</StyledUserStatus>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ logoutUser: logoutUserAction }
)(withRouter(UserStatus));
