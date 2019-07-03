import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { logoutUser as logoutUserAction } from '../actions/authActions';

import SkewedBox from './SkewedBox';
import CenteredContent from './CenteredContent';
import WAOButton from './WAOButton';

const StyledUserStatus = styled.div`
	.userstatus-inner {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
	}

	span {
		margin-bottom: 5px;
    }


	.user-status-button {
        padding-bottom: 3px;
	}

	color: white;
`;

const UserStatus = ({ auth, logoutUser, history }) => {
	const onLogoutClick = e => {
		logoutUser();
	};

	const onLoginClick = e => {
		history.push('/login');
	};

	const onSignupClick = e => {
		history.push('/signup');
	};

	return (
		<StyledUserStatus>
			<CenteredContent>
				{auth.isAuthenticated && (
					<div className="userstatus-inner">

						<div className="user-status-button">
							<WAOButton color="purple" iconClass="fas fa-sign-in-alt" clickCallback={onLogoutClick} xs2 />
						</div>
					</div>
				)}
				{/* {!auth.isAuthenticated && (
					<div className="userstatus-inner">
						<div className="user-status-button">
							<WAOButton color="blue" clickCallback={onSignupClick} xs3 />
						</div>
						<div className="user-status-button">
							<WAOButton color="green" clickCallback={onLoginClick} xs3 />
						</div>
					</div>
				)} */}
			</CenteredContent>
		</StyledUserStatus>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ logoutUser: logoutUserAction }
)(UserStatus);
