import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { verifyUser as verifyUserAction, resendVerification as resendVerificationAction } from '../../actions/authActions';
import { routeDefs } from '../../routeDefs';

import WAOForm from '../WAOForm';
import PageWrapper from '../PageWrapper';
import PageCard from '../PageCard';
import WAOButton from '../WAOButton';
import DataFieldEmail from '../dataFields/DataFieldEmail';

const StyledVerify = styled.div`
	width: 100%;

	.verify-content {
		height: 300px;
		width: 100%;
		padding: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		text-align: left;

		.verify-loading {
			font-size: 28px;
		}

		.verify-error-title {
			font-weight: bold;
			margin-bottom: 5px;
		}

		.verify-error-resend-title {
			font-size: 12px;
			margin-bottom: 5px;
		}

		.verify-error-resend-button {
			margin-top: 5px;

			& > div {
				margin-left: auto;
			}
		}

		.verify-error-resend-success {
			text-align: center;

			.verify-error-resend-success-title {
				font-size: 28px;
				margin-bottom: 10px;
			}

			.verify-error-resend-success-reminder {
				font-size: 16px;
			}
		}

		.verify-signup {
			margin-left: auto;
			font-size: 14px;
			margin-top: 10px;
			text-align: right;

			a {
				color: white;
				cursor: pointer;
			}
		}
	}
`;

const Verify = ({ match, history, verifyUser, resendVerification }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [email, setEmail] = useState('');
	const [isInvalid, setIsInvalid] = useState(false);

	const [isResendFinished, setIsResendFinished] = useState(false);
	const [isResendError, setIsResendError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const { token } = match.params;

		verifyUser(token)
			.then(() => history.push(routeDefs.login))
			.catch(() => setIsError(true))
			.finally(() => setIsLoading(false));
	}, []);

	const onResendClick = () => {
		if (email.length > 0) {
			setIsLoading(true);

			resendVerification(email)
				.catch(() => {
					setIsResendError(true);
				})
				.finally(() => {
					setIsLoading(false);
					setIsResendFinished(true);
				});
		}
	};

	return (
		<PageWrapper>
			<StyledVerify>
				<PageCard isLoading={isLoading} isSkewed>
					<WAOForm onSubmit={onResendClick} canSubmit={!isLoading && isError && !isResendFinished && isResendError && !isInvalid}>
					<div className="verify-content">
						{isLoading && (
							<div className="verify-loading">
								Loading <i className="fas fa-spinner fa-spin"></i>
							</div>
						)}

						{!isLoading && isError && (
							<div className="verify-error">
								{(!isResendFinished || (isResendFinished && isResendError)) && <div className="verify-error-title"> There was an error verifying your email.</div>}

								{(!isResendFinished || isResendError) && (
									<div>
										<div className="verify-error-resend-title">Your verification token may have expired. Please enter the email you signed up with to send a new verification email.</div>
										<DataFieldEmail state={email} setState={setEmail} isInvalid={isInvalid} setIsInvalid={setIsInvalid} title="Email" isRequired />

										<div className="verify-error-resend-button">
											<WAOButton title="Resend" color="purple" clickCallback={onResendClick} isLoading={isLoading} isDisabled={isLoading || isInvalid} isSubmit />
										</div>

										<div className="verify-signup">
											Need an account? <Link to="/signup">Signup</Link>
										</div>
									</div>
								)}

								{isResendFinished && !isResendError && (
									<div className="verify-error-resend-success">
										<div className="verify-error-resend-success-title">Success!</div>
										<div className="verify-error-resend-success-reminder">A verification email has been sent to {email}. Please check your inbox (and spam).</div>
									</div>
								)}
							</div>
						)}
					</div>
					</WAOForm>
				</PageCard>
			</StyledVerify>
		</PageWrapper>
	);
};

const mapStateToProps = state => {};
export default connect(
	mapStateToProps,
	{
		verifyUser: verifyUserAction,
		resendVerification: resendVerificationAction
	}
)(Verify);
