import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/authActions';
import { routeDefs } from '../../routeDefs';

import PageWrapper from '../PageWrapper';
import PageCard from '../PageCard';
import WAOButton from '../WAOButton';
import DataFieldEmail from '../dataFields/DataFieldEmail';
import DataFieldPassword from '../dataFields/DateFieldPassword';

// 500 x 262
const StyledLogin = styled.div`
	width: 100%;

	.login-content {
		display: flex;
		flex-direction: column;
		width: 100%;

		.login-header-row {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-end;

			.login-title {
				font-family: NinjaNaruto;
				margin-right: auto;
				font-size: 24px;
				margin-bottom: -5px;
			}

			.login-forgot-password {
				text-align: right;
				font-size: 12px;

				a {
					color: white;
					cursor: pointer;
				}
			}
		}

		.spacer {
			height: 10px;
		}

		.login-button {
			margin-left: auto;
		}

		.login-to-signup {
			margin-left: auto;
			font-size: 14px;

			a {
				color: white;
				cursor: pointer;
			}
		}
	}
`;

const Login = ({ auth, history, loginUser }) => {
	const [email, setEmail] = useState('');
	const [isEmailInvalid, setIsEmailInvalid] = useState(false);
	const [password, setPassword] = useState('');
	const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

	const [isInvalid, setIsInvalid] = useState(false);

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// If logged in user naviages here, redirect
		if (auth.isAuthenticated) {
			history.push(routeDefs.home);
		}
	}, [auth.isAuthenticated]);

	useEffect(() => {
		setIsInvalid(isEmailInvalid || isPasswordInvalid);
	}, [isEmailInvalid, isPasswordInvalid]);

	const onSubmit = e => {
		setIsLoading(true);

		const user = {
			email: email,
			password: password
		};

		loginUser(user).finally(() => {
			setIsLoading(false);
		}); // since we handle the redirect within our component, we don't need to pass in props.history as a paramter
	};

	return (
		<PageWrapper>
			<StyledLogin>
				<PageCard isLoading={isLoading} isSkewed>
					<div className="login-content">
						<div className="login-header-row">
							<div className="login-title">Login</div>
							<div className="login-forgot-password">
								<Link to={routeDefs.passwordReset}>Forgot Password?</Link>
							</div>
						</div>

						<form noValidate onSubmit={onSubmit}>
							<DataFieldEmail state={email} setState={setEmail} isInvalid={isEmailInvalid} setIsInvalid={setIsEmailInvalid} title="Email" isRequired />
							<DataFieldPassword state={password} setState={setPassword} isInvalid={isPasswordInvalid} setIsInvalid={setIsPasswordInvalid} shouldNotTestPassword isRequired />
						</form>
						<div className="spacer" />

						<div className="login-button">
							<WAOButton title="Login" color="green" clickCallback={onSubmit} isLoasing={isLoading} isDisabled={isLoading || isInvalid} />
						</div>

						<div className="login-to-signup">
							Need an account? <Link to={routeDefs.signup}>Signup</Link>
						</div>
					</div>
				</PageCard>
			</StyledLogin>
		</PageWrapper>
	);
};

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ loginUser }
)(Login);
