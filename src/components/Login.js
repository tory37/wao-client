import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions/authActions';

import BUSButton from './BUSButton';
import StyledShadowedBox from '../styles/StyledShadowedBox';

const StyledLogin = styled.div`
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

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

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

const Login = ({ auth, history, errors, loginUser }) => {
	const [login, setLogin] = useState({
		email: '',
		password: '',
		errors: {}
	});

	useEffect(() => {
		// If logged in user naviages here, redirect
		// if (auth.isAuthenticated) {
		// 	history.push('/');
		// }

		if (errors) {
			const moddedState = _.clone(login);
			moddedState.errors = errors;
			setLogin(moddedState);
		}
	}, [auth.isAuthenticated, errors, history, login]);

	const onChange = e => {
		// TODO: ASK ABOUT THIS
		const moddedState = _.clone(login);
		moddedState[e.target.id] = e.target.value;
		setLogin(moddedState);
	};

	const onSubmit = e => {
		e.preventDefault();

		const user = {
			email: login.email,
			password: login.password
		};

		loginUser(user); // since we handle the redirect within our component, we don't need to pass in props.history as a paramter
	};

	const emailLabel = 'Email';
	const passwordLabel = 'Password';

	const emailSpan = login.email && login.email.length > 0 ? emailLabel : '\u00A0';
	const passwordSpan = login.password && login.password.length > 0 ? passwordLabel : '\u00A0';

	return (
		<StyledLogin>
			<StyledShadowedBox>
				<div className="content">
					<form noValidate onSubmit={onSubmit}>
						<div className="title-row">
							<div className="title">Login</div>
							<Link to="/signup">Signup</Link>
						</div>

						<label htmlFor="email">
							<span>{emailSpan}</span>
							<input onChange={onChange} value={login.email} error={login.errors.email} id="email" type="email" placeholder={emailLabel} className={login.errors.email ? 'error' : ''} />
							<span>{login.errors.email}</span>
						</label>

						<label htmlFor="password">
							<span>{passwordSpan}</span>
							<input onChange={onChange} value={login.password} error={login.errors.password} id="password" type="password" placeholder={passwordLabel} className={login.errors.password ? 'error' : ''} />
							<span>{login.errors.password}</span>
						</label>

						<div className="bus-button">
							<BUSButton className="bus-button" title="Login" clickAction={onSubmit} />
						</div>
					</form>
				</div>
			</StyledShadowedBox>
		</StyledLogin>
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
