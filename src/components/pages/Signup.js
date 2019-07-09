import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/authActions';
import { routeDefs } from '../../routeDefs';

import WAOForm from '../WAOForm';
import PageWrapper from '../PageWrapper';
import PageCard from '../PageCard';
import WAOButton from '../WAOButton';
import DataFieldText from '../dataFields/DataFieldText';
import DataFieldEmail from '../dataFields/DataFieldEmail';
import DataFieldPassword from '../dataFields/DateFieldPassword';
import DataFieldConfirmPassword from '../dataFields/DataFieldConfirmPassword';

// 500 x 262
const StyledSignup = styled.div`
	width: 100%;

	.signup-content {
		display: flex;
		flex-direction: column;
		width: 100%;

		.signup-title {
			font-family: NinjaNaruto;
			margin-right: auto;
			font-size: 24px;
			margin-bottom: 5px;
		}

		.spacer {
			height: 10px;
		}

		.signup-button {
			margin-left: auto;
		}

		.signup-to-login {
			margin-left: auto;
			font-size: 14px;
			margin-top: 10px;

			a {
				color: white;
				cursor: pointer;
			}
		}
	}
`;
const Signup = ({ auth, history, registerUser }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isInvalid, setIsInvalid] = useState(true);

	const [username, setUsername] = useState('');
	const [isUsernameInvalid, setIsUsernameInvalid] = useState(false);
	const [email, setEmail] = useState('');
	const [isEmailInvalid, setIsEmailInvalid] = useState(false);
	const [password, setPassword] = useState('');
	const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isConfirmPasswordInvalid, setIsConfirmPasswordInvalid] = useState(false);

	useEffect(() => {
		// If logged in user naviages here, redirect
		if (auth.isAuthenticated) {
			history.push(routeDefs.home);
		}
	}, [auth.isAuthenticated]);

	useEffect(() => {
		setIsInvalid(isUsernameInvalid || isEmailInvalid || isPasswordInvalid || isConfirmPasswordInvalid);
	}, [isUsernameInvalid, isEmailInvalid, isPasswordInvalid, isConfirmPasswordInvalid]);

	const onSubmit = e => {
		setIsLoading(true);

		const newUser = {
			username: username,
			email: email,
			password: password,
			password2: confirmPassword
		};

		registerUser(newUser, history).catch(() => {
			setIsLoading(false);
		});
	};

	return (
		<PageWrapper>
			<StyledSignup>
				<PageCard isLoading={isLoading} isSkewed>
					<WAOForm onSubmit={onSubmit} canSubmit={!isLoading && !isInvalid}>
						<div className="signup-content">
							<div className="signup-title">Signup</div>

							<DataFieldText state={username} setState={setUsername} isInvalid={isUsernameInvalid} setIsInvalid={setIsUsernameInvalid} title="Username" isRequired />
							<DataFieldEmail state={email} setState={setEmail} isInvalid={isEmailInvalid} setIsInvalid={setIsEmailInvalid} title="Email" isRequired />
							<DataFieldPassword state={password} setState={setPassword} isInvalid={isPasswordInvalid} setIsInvalid={setIsPasswordInvalid} shouldValidate />
							<DataFieldConfirmPassword state={confirmPassword} setState={setConfirmPassword} isInvalid={isConfirmPasswordInvalid} setIsInvalid={setIsConfirmPasswordInvalid} password={password} />

							<div className="spacer" />

							<div className="signup-button">
								<WAOButton title="Signup" color="blue" clickCallback={onSubmit} isLoading={isLoading} isDisabled={isLoading || isInvalid} isSubmit />
							</div>

							<div className="signup-to-login">
								Have an account? <Link to="/login">Login</Link>
							</div>
						</div>
					</WAOForm>
				</PageCard>
			</StyledSignup>
		</PageWrapper>
	);
};

Signup.propTypes = {
	registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ registerUser }
)(withRouter(Signup));
