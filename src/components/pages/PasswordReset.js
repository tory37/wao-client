import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { routeDefs } from '../../routeDefs';

import { resetPassword as resetPasswordAction } from '../../actions/authActions';

import PageWrapper from '../PageWrapper';
import PageCard from '../PageCard';
import DataField from '../DataField';
import WAOButton from '../WAOButton';

const StyledPasswordReset = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	.passwordreset-title {
		font-family: NinjaNaruto;
		margin-right: auto;
		font-size: 24px;
	}

	.passwordreset-button {
		margin-left: auto;
		margin-top: 5px;
	}

	.passwordreset-finished {
		margin-top: 10px;
		text-align: left;
	}
`;

const PasswordReset = ({ resetPassword, auth }) => {
	const [email, setEmail] = useState({
		email: ''
	});

	const [isLoading, setIsLoading] = useState(false);
	const [isFinishedSending, setIsFinishedSending] = useState(false);

	const onResetPasswordClick = () => {
		setIsLoading(true);

		resetPassword(email.email)
			.then(() => {
				setIsFinishedSending(true);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<PageWrapper>
			<PageCard isLoading={isLoading} isSkewed>
				<StyledPasswordReset>
					<div className="passwordreset-title">Password Reset</div>

					{!auth.isAuthenticated && !isFinishedSending && <DataField statePropertyPath="email" formState={email} formSetState={setEmail} title="Email" isEmail />}

					{!auth.isAuthenticated && !isFinishedSending && (
						<div className="passwordreset-button">
							<WAOButton title="Reset" color="purple" clickCallback={onResetPasswordClick} isDisabled={isLoading} isLoading={isLoading} />
						</div>
					)}

					{!auth.isAuthenticated && isFinishedSending && <div className="passwordreset-finished">Success! A password reset email has been sent to {email.email}. Please check your inbox (and your spam folder).</div>}

					{auth.isAuthenticated && (
						<div className="passwordreset-finished">
							{' '}
							You are already logged in. If you need to change your password, do so from your <Link to={routeDefs.userProfile}>profile</Link>
						</div>
					)}
				</StyledPasswordReset>
			</PageCard>
		</PageWrapper>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ resetPassword: resetPasswordAction }
)(PasswordReset);
