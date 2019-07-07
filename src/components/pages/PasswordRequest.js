import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import { resetPassword as resetPasswordAction } from '../../actions/authActions';

import PageWrapper from '../PageWrapper';
import PageCard from '../PageCard';
import DataField from '../DataField';
import WAOButton from '../WAOButton';

const StyledPasswordRequest = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	.passwordrequest-title {
		font-family: NinjaNaruto;
		margin-right: auto;
		font-size: 24px;
	}

	.passwordrequest-button {
		margin-left: auto;
		margin-top: 5px;
	}

	.passwordrequest-finished {
		margin-top: 10px;
		text-align: left;
	}
`;

const PasswordRequest = ({ resetPassword }) => {
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
				<StyledPasswordRequest>
					<div className="passwordrequest-title">Password Reset</div>

					{!isFinishedSending && <DataField statePropertyPath="email" formState={email} formSetState={setEmail} title="Email" isEmail />}

					{!isFinishedSending && (
						<div className="passwordrequest-button">
							<WAOButton title="Reset" color="purple" clickCallback={onResetPasswordClick} isDisabled={isLoading} isLoading={isLoading} />
						</div>
					)}

					{isFinishedSending && <div className="passwordrequest-finished">Success! A password reset email has been sent to {email.email}. Please check your inbox (and your spam folder).</div>}
				</StyledPasswordRequest>
			</PageCard>
		</PageWrapper>
	);
};

const mapStateToProps = state => ({});

export default connect(
	mapStateToProps,
	{ resetPassword: resetPasswordAction }
)(PasswordRequest);
