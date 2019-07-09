import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { routeDefs } from '../../routeDefs';

import { resetPassword as resetPasswordAction } from '../../actions/authActions';

import WAOForm from '../WAOForm';
import PageWrapper from '../PageWrapper';
import PageCard from '../PageCard';
import WAOButton from '../WAOButton';
import DataFieldEmail from '../dataFields/DataFieldEmail';

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
	const [email, setEmail] = useState('');
	const [isInvalid, setIsInvalid] = useState(false);

	const [isLoading, setIsLoading] = useState(false);
	const [isFinishedSending, setIsFinishedSending] = useState(false);

	const onResetPasswordClick = () => {
		setIsLoading(true);

		resetPassword(email)
			.then(() => {
				setIsFinishedSending(true);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<StyledPasswordReset>
			<PageWrapper>
				<PageCard isLoading={isLoading} isSkewed>
					<WAOForm onSubmit={onResetPasswordClick} canSubmit={!isLoading && !isInvalid}>
						<div className="passwordreset-title">Password Reset</div>

						{!auth.isAuthenticated && !isFinishedSending && <DataFieldEmail state={email} setState={setEmail} isInvalid={isInvalid} setIsInvalid={setIsInvalid} title="Email" isRequired />}

						{!auth.isAuthenticated && !isFinishedSending && (
							<div className="passwordreset-button">
								<WAOButton title="Reset" color="purple" clickCallback={onResetPasswordClick} isDisabled={isLoading || isInvalid} isLoading={isLoading} />
							</div>
						)}

						{!auth.isAuthenticated && isFinishedSending && <div className="passwordreset-finished">Success! A password reset email has been sent to {email.email}. Please check your inbox (and your spam folder).</div>}

						{auth.isAuthenticated && (
							<div className="passwordreset-finished">
								You are already logged in. If you need to change your password, do so from your <Link to={routeDefs.userProfile}>profile</Link>
							</div>
						)}
					</WAOForm>
				</PageCard>
			</PageWrapper>
		</StyledPasswordReset>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ resetPassword: resetPasswordAction }
)(PasswordReset);
