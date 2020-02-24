import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { loginUser } from 'store/auth/actions';
import queryString from 'query-string';
import { routePaths } from 'routeDefs';

import WAOForm from 'components/WAOForm';
import PageWrapper from 'components/PageWrapper';
import PageCard from 'components/PageCard';
import WAOButton from 'components/WAOButton';
import DataFieldEmail from 'components/dataFields/DataFieldEmail';
import DataFieldPassword from 'components/dataFields/DateFieldPassword';

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
			margin-bottom: 10px;

			.login-title {
				font-family: NinjaNaruto;
				margin-right: auto;
				font-size: 24px;
				margin-bottom: -5px;
			}

			.login-forgot-password {
				text-align: right;
				font-size: 12px;
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
			margin-top: 5px;
			font-size: 14px;

			a {
				color: white;
				cursor: pointer;
			}
		}
	}
`;

const Login = ( { auth, history, loginUser, location } ) => {
	const [ isInvalid, setIsInvalid ] = useState( false );
	const [ isLoading, setIsLoading ] = useState( false );

	const [ email, setEmail ] = useState( '' );
	const [ isEmailInvalid, setIsEmailInvalid ] = useState( false );
	const [ password, setPassword ] = useState( '' );
	const [ isPasswordInvalid, setIsPasswordInvalid ] = useState( false );

	useEffect( () => {
		// If logged in user naviages here, redirect
		if ( auth.isAuthenticated ) {
			let queries = queryString.parse( location.search );
			if ( queries && queries.goback ) {
				history.push( queries.goback );
			} else {
				history.push( routePaths.home );
			}
		}
	}, [ auth.isAuthenticated ] );

	useEffect( () => {
		setIsInvalid( isEmailInvalid || isPasswordInvalid );
	}, [ isEmailInvalid, isPasswordInvalid ] );

	const onSubmit = e => {
		setIsLoading( true );

		const user = {
			email: email,
			password: password
		};

		loginUser( user ).catch( () => {
			setIsLoading( false );
		} ); // since we handle the redirect within our component, we don't need to pass in props.history as a paramter
	};

	return (
		<PageWrapper>
			<StyledLogin>
				<PageCard isLoading={ isLoading } isSkewed>
					<WAOForm onSubmit={ onSubmit } canSubmit={ !isLoading && !isInvalid }>
						<div className="login-content">
							<div className="login-header-row">
								<div className="login-title">Login</div>
								<div className="login-forgot-password">
									<Link to={ routePaths.passwordReset }>Forgot Password?</Link>
								</div>
							</div>

							<DataFieldEmail state={ email } setState={ setEmail } isInvalid={ isEmailInvalid } setIsInvalid={ setIsEmailInvalid } title="Email" isRequired />
							<DataFieldPassword state={ password } setState={ setPassword } isInvalid={ isPasswordInvalid } setIsInvalid={ setIsPasswordInvalid } shouldNotTestPassword isRequired />

							<div className="spacer" />

							<div className="login-button">
								<WAOButton title="Login" color="green" clickCallback={ onSubmit } isLoasing={ isLoading } isDisabled={ isLoading || isInvalid } isSubmit />
							</div>

							<div className="login-to-signup">
								Need an account? <Link to={ routePaths.signup }>Signup</Link>
							</div>
							<div className="login-to-signup">
								Not verified? <Link to={ routePaths.verifyUser }>Resend Verification</Link>
							</div>
						</div>
					</WAOForm>
				</PageCard>
			</StyledLogin>
		</PageWrapper>
	);
};

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ( {
	auth: state.auth
} );

export default connect(
	mapStateToProps,
	{ loginUser }
)( withRouter( Login ) );
