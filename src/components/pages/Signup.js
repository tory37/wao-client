import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/authActions';
import { routeDefs } from '../../routeDefs';

import PageWrapper from '../PageWrapper';
import PageCard from '../PageCard';
import DataField from '../DataField';
import WAOButton from '../WAOButton';
import DataFieldText from '../dataFields/DataFieldText';
import DataFieldEmail from '../dataFields/DataFieldEmail';
import DataFieldPassword from '../dataFields/DateFieldPassword';

// 500 x 262
const StyledSignup = styled.div`
	width: 100%;

	.signup-content {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-left: 19px;
		padding-right: 30px;
		padding-bottom: 5px;
		padding-top: 20px;

		.signup-title {
			font-family: NinjaNaruto;
			margin-right: auto;
			font-size: 24px;
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

	const [username, setUsername] = useState({
		value: '',
		isInvalid: false
	});

	const [email, setEmail] = useState({
		value: '',
		isInvalid: false
	});

	const [password, setPassword] = useState({
		value: '',
		isInvalid: false
	});

	const [confirmPassword, setConfirmPassword] = useState({
		value: '',
		isInvalid: ''
	});

	useEffect(() => {
		// If logged in user naviages here, redirect
		if (auth.isAuthenticated) {
			history.push(routeDefs.home);
		}
	}, [auth.isAuthenticated, history]);

	useEffect(() => {
		setIsInvalid(username.isInvalid || email.isInvalid || password.isInvalid || confirmPassword.isInvalid);
	}, [username, email, password, confirmPassword]);

	const onSubmit = e => {
		setIsLoading(true);

		const newUser = {
			username: username.value,
			email: email.value,
			password: password.value,
			password2: confirmPassword.value
		};

		registerUser(newUser, history).finally(() => {
			setIsLoading(false);
		});
	};

	return (
		<PageWrapper>
			<StyledSignup>
				<PageCard isLoading={isLoading} isSkewed>
					<div className="signup-content">
						<div className="signup-title">Signup</div>

						<form noValidate onSubmit={onSubmit}>
							<DataFieldText state={username} setState={setUsername} title="Username" isRequired />
							<DataFieldEmail state={email} setState={setEmail} title="Email" isRequired />
							<DataFieldPassword passwordState={password} passwordSetState={setPassword} confirmPasswordState={confirmPassword} confirmPasswordSetState={setConfirmPassword} />
						</form>
						<div className="spacer" />

						<div className="signup-button">
							<WAOButton title="Signup" color="blue" clickCallback={onSubmit} isDisabled={isInvalid} />
						</div>

						<div className="signup-to-login">
							Already have an account? <Link to="/login">Login</Link>
						</div>
					</div>
				</PageCard>
			</StyledSignup>
		</PageWrapper>
	);
};

Signup.propTypes = {
	registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{ registerUser }
)(withRouter(Signup));
