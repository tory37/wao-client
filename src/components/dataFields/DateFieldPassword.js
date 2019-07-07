import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import StyledDataField from './StyledDataField';

const DataFieldPassword = ({ title, passwordState, passwordSetState, confirmPasswordState, confirmPasswordSetState }) => {
	const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
	const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('');

	const isPasswordSecure = pass => {
		return /[a-z]/.test(pass) && /[A-Z]/.test(pass) && /[0-1]/.test(pass);
	};

	const passwordSecurityMessage = 'Must contain at least one uppercase, lowercase, and number';

	const getIsPasswordInvalid = newValue => {
		if (newValue.length === 0) {
			setPasswordErrorMessage('Required');
			return true;
		}

		if (!isPasswordSecure(newValue)) {
			setPasswordErrorMessage(passwordSecurityMessage);
			return true;
		}

		setPasswordErrorMessage('\u00A0');
		return false;
	};

	const getIsConfirmPasswordInvalid = newValue => {
		if (newValue.length === 0) {
			setConfirmPasswordErrorMessage('Required');
			return true;
		}

		if (passwordState.value !== newValue) {
			setConfirmPasswordErrorMessage('Passwords do not match');
			return true;
		}

		setConfirmPasswordErrorMessage('\u00A0');
		return false;
	};

	useEffect(() => {
		passwordSetState({
			...passwordState,
			isInvalid: getIsPasswordInvalid(passwordState.value)
		});
	}, []);

	useEffect(() => {
		confirmPasswordSetState({
			...confirmPasswordState,
			isInvalid: getIsConfirmPasswordInvalid(confirmPasswordState.value)
		});
	}, [passwordState]);

	const onPasswordChange = e => {
		passwordSetState({
			value: e.target.value,
			isInvalid: getIsPasswordInvalid(e.target.value)
		});
	};

	const onConfirmPasswordChange = e => {
		confirmPasswordSetState({
			value: e.target.value,
			isInvalid: getIsConfirmPasswordInvalid(e.target.value)
		});
	};

	return (
		<div>
			<StyledDataField isInvalid={passwordState.isInvalid}>
				<span className="datafield-title">{passwordState.value && passwordState.value.length > 0 ? 'Password' : '\u00A0'}</span>
				<input onChange={onPasswordChange} value={passwordState.value} type="password" placeholder={'Password'} />
				<div className="datafield-error">
					{passwordState.isInvalid && <i className="fas fa-exclamation"></i>}
					<span>{passwordErrorMessage}</span>
				</div>
			</StyledDataField>

			<StyledDataField isInvalid={confirmPasswordState.isInvalid}>
				<span className="datafield-title">{confirmPasswordState.value && confirmPasswordState.value.length > 0 ? 'Confirm Password' : '\u00A0'}</span>
				<input onChange={onConfirmPasswordChange} value={confirmPasswordState.value} type="password" placeholder={'Confirm Password'} />
				<div className="datafield-error">
					{confirmPasswordState.isInvalid && <i className="fas fa-exclamation"></i>}
					<span>{confirmPasswordErrorMessage}</span>
				</div>
			</StyledDataField>
		</div>
	);
};

export default DataFieldPassword;
