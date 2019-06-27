import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { registerUser } from '../actions/authActions';
import StyledShadowedBox from '../styles/StyledShadowedBox';

import BUSButton from './BUSButton';

const StyledSignup = styled.div`
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	.content {
		width: 450px;
		height: auto;
		padding: 48px 40px 36px;
		background-color: white;

		.title-row {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.title {
				font-family: 'Google Sans', 'Noto Sans Myanmar UI', arial, sans-serif;
				font-size: 24px;
				font-weight: 400;
				line-height: 1.3333;
				align-self: center;
			}

			a {
				font-size: 10px;
			}
		}

		form {
			width: 100%;
		}

		label {
			/* display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center; */
			margin-top: 25px;
			width: 100%;
			display: inline-block;
			height: 54px;

			span {
				/* width: 115px;
      margin-right: 20px; */
				font-size: 12px;
				color: darkgray;
			}

			input {
				border-top: none;
				border-right: none;
				border-left: none;
			}
		}

		.bus-button {
			margin-left: auto;
			margin-top: 25px;
		}
	}
`;

const Signup = props => {
	const [signup, setSignup] = useState({
		username: '',
		email: '',
		password: '',
		password2: '',
		errors: {}
	});

	useEffect(() => {
		// If logged in user naviages here, redirect
		if (props.auth.isAuthenticated) {
			props.history.push('/login');
		}

		if (props.errors) {
			const moddedState = _.clone(signup);
			moddedState.errors = props.errors;
			setSignup(moddedState);
		}
	}, [props.auth.isAuthenticated, props.errors, props.history, signup]);

	const onChange = e => {
		// TODO: ASK ABOUT THIS
		const moddedState = _.clone(signup);
		moddedState[e.target.id] = e.target.value;
		setSignup(moddedState);
	};

	const onSubmit = e => {
		e.preventDefault();

		const newUser = {
			username: signup.username,
			email: signup.email,
			password: signup.password,
			password2: signup.password
		};

		props.registerUser(newUser, props.history);
	};

	const usernameLabel = 'Username';
	const emailLabel = 'Email';
	const passwordLabel = 'Password';
	const password2Label = 'Confirm Password';

	const usernameSpan = signup.username && signup.username.length > 0 ? usernameLabel : '\u00A0';
	const emailSpan = signup.email && signup.email.length > 0 ? emailLabel : '\u00A0';
	const passwordSpan = signup.password && signup.password.length > 0 ? passwordLabel : '\u00A0';
	const password2Span = signup.password2 && signup.password2.length > 0 ? password2Label : '\u00A0';

	return (
		<StyledSignup>
			<StyledShadowedBox>
				<div className="content">
					<form noValidate onSubmit={onSubmit}>
						<div className="title-row">
							<div className="title">Signup</div>
							<Link to="/login">Login</Link>
						</div>

						<label htmlFor="username">
							<span>{usernameSpan}</span>
							<input onChange={onChange} value={signup.username} error={signup.errors.username} id="username" type="text" placeholder={usernameLabel} className={signup.errors.username ? 'error' : ''} />
							<span>{signup.errors.username}</span>
						</label>

						<label htmlFor="email">
							<span>{emailSpan}</span>
							<input onChange={onChange} value={signup.email} error={signup.errors.email} id="email" type="email" placeholder={emailLabel} className={signup.errors.email ? 'error' : ''} />
							<span>{signup.errors.email}</span>
						</label>

						<label htmlFor="password">
							<span>{passwordSpan}</span>
							<input onChange={onChange} value={signup.password} error={signup.errors.password} id="password" type="password" placeholder={passwordLabel} className={signup.errors.password ? 'error' : ''} />
							<span>{signup.errors.password}</span>
						</label>

						<label htmlFor="password2">
							<span>{password2Span}</span>
							<input onChange={onChange} value={signup.password2} error={signup.errors.password2} id="password2" type="password" placeholder={password2Label} className={signup.errors.password2 ? 'error' : ''} />
							<span>{signup.errors.password2}</span>
						</label>

						<div className="bus-button">
							<BUSButton className="bus-button" title="Signup" clickAction={onSubmit} />
						</div>
					</form>
				</div>
			</StyledShadowedBox>
		</StyledSignup>
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
