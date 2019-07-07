import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/authActions';
import {routeDefs} from '../../routeDefs';

import PageWrapper from '../PageWrapper';
import PageCard from '../PageCard';
import DataField from '../DataField';
import WAOButton from '../WAOButton';

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
	const [signup, setSignup] = useState({
		username: '',
		email: '',
		password: '',
		password2: '',
		errors: {}
	});

	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		// If logged in user naviages here, redirect
		if (auth.isAuthenticated) {
			history.push(routeDefs.home);
		}
	}, [auth.isAuthenticated, history, signup]);

	const onChange = e => {
		// TODO: ASK ABOUT THIS
		const moddedState = _.clone(signup);
		moddedState[e.target.id] = e.target.value;
		setSignup(moddedState);
	};

	const onSubmit = e => {
		setIsLoading(true);

		const newUser = {
			username: signup.username,
			email: signup.email,
			password: signup.password,
			password2: signup.password
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
							<DataField statePropertyPath="username" formState={signup} formSetState={setSignup} title="Username" isText />
							<DataField statePropertyPath="email" formState={signup} formSetState={setSignup} title="Email" isEmail />
							<DataField statePropertyPath="password" formState={signup} formSetState={setSignup} title="Password" isPassword />
							<DataField statePropertyPath="password2" formState={signup} formSetState={setSignup} title="Confirm Password" isPassword />
						</form>
						<div className="spacer" />

						<div className="signup-button">
							<WAOButton title="Signup" color="blue" clickCallback={onSubmit} />
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
