import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { routeDefs } from '../../routeDefs';

import { updatePasswordWithToken as updatePasswordWithTokenAction } from '../../actions/authActions';

import PageWrapper from '../PageWrapper';
import PageCard from '../PageCard';
import WAOButton from '../WAOButton';
import DataFieldPassword from '../dataFields/DateFieldPassword';
import DataFieldConfirmPassword from '../dataFields/DataFieldConfirmPassword';

const StyledPasswordChange = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	.passwordchange-title {
		font-family: NinjaNaruto;
		text-align: left;
		font-size: 24px;
	}

	.passwordchange-form {
		width: 100%;

		.passwordchange-button {
			margin-top: 5px;

			& > div {
				margin-left: auto;
			}
		}
	}
`;

const PasswordChange = ({ updatePasswordWithToken, history, match }) => {
	const [isLoading, setIsLoading] = useState(false);

	const [password, setPassword] = useState('');
	const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isConfirmPasswordInvalid, setIsConfirmPasswordInvalid] = useState(false);

	const [isInvalid, setIsInvalid] = useState(false);

	useEffect(() => {
		setIsInvalid(isPasswordInvalid || isConfirmPasswordInvalid);
	}, [isPasswordInvalid, isConfirmPasswordInvalid]);

	const onSave = () => {
		setIsLoading(true);

		const { token } = match.params;

		updatePasswordWithToken(password, confirmPassword, token)
			.then(() => {
				history.push(routeDefs.login);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<PageWrapper>
			<StyledPasswordChange>
				<PageCard>
					<div className="passwordchange-title">Change Password</div>

					{!isLoading && (
						<div className="passwordchange-form">
							<DataFieldPassword state={password} setState={setPassword} isInvalid={isPasswordInvalid} setIsInvalid={setIsPasswordInvalid} shouldValidate />
							<DataFieldConfirmPassword state={confirmPassword} setState={setConfirmPassword} isInvalid={isConfirmPasswordInvalid} setIsInvalid={setIsConfirmPasswordInvalid} password={password} />

							<div className="passwordchange-button">
								<WAOButton title="Save" color="purple" clickCallback={onSave} isDisabled={isLoading || isInvalid} isLoading={isLoading} />
							</div>
						</div>
					)}
				</PageCard>
			</StyledPasswordChange>
		</PageWrapper>
	);
};

const mapStateToProps = state => ({});

export default connect(
	mapStateToProps,
	{ updatePasswordWithToken: updatePasswordWithTokenAction }
)(PasswordChange);
