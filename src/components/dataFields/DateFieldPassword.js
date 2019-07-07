import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import StyledDataField from './StyledDataField';

const DataFieldPassword = ({ state, setState, isInvalid, setIsInvalid, shouldValidate, shouldNotTestPassword }) => {
	const [errorMessage, setErrorMessage] = useState('');

	const isPasswordSecure = pass => {
		return /[a-z]/.test(pass) && /[A-Z]/.test(pass) && /[0-1]/.test(pass);
	};

	const passwordSecurityMessage = 'Must contain at least one uppercase, lowercase, and number';

	const getIsInvalid = newValue => {
		if (newValue.length === 0) {
			setErrorMessage('Required');
			return true;
		}

		if (!shouldNotTestPassword && !isPasswordSecure(newValue)) {
			setErrorMessage(passwordSecurityMessage);
			return true;
		}

		setErrorMessage('\u00A0');
		return false;
	};

	useEffect(() => {
		setIsInvalid(getIsInvalid(state));
	}, []);

	const onChange = e => {
		setState(e.target.value);
		setIsInvalid(getIsInvalid(e.target.value));
	};

	return (
		<div>
			<StyledDataField isInvalid={isInvalid}>
				<span className="datafield-title">{state && state.length > 0 ? 'Password' : '\u00A0'}</span>
				<input onChange={onChange} value={state} type="password" placeholder={'Password'} />
				<div className="datafield-error">
					{isInvalid && <i className="fas fa-exclamation"></i>}
					<span>{errorMessage}</span>
				</div>
			</StyledDataField>
		</div>
	);
};

export default DataFieldPassword;
