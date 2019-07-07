import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { routeDefs } from '../../routeDefs';

import { updatePasswordWithToken as updatePasswordWithTokenAction } from '../../actions/authActions';

import PageWrapper from '../PageWrapper';
import PageCard from '../PageCard';
import WAOButton from '../WAOButton';
import DataField from '../DataField';

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

	const [newPassword, setNewPassword] = useState({
		password: '',
		password2: ''
	});

	const onSave = () => {
		setIsLoading(true);

		const { token } = match.params;

		updatePasswordWithToken(newPassword.password, newPassword.password2, token)
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
							<DataField statePropertyPath="password" formState={newPassword} formSetState={setNewPassword} title="New Password" isPassword />
							<DataField statePropertyPath="password2" formState={newPassword} formSetState={setNewPassword} title="Confirm New Password" isPassword />

							<div className="passwordchange-button">
								<WAOButton title="Save" color="purple" clickCallback={onSave} isDisabled={isLoading} isLoading={isLoading} />
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
