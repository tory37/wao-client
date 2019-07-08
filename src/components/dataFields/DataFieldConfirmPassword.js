import React, { useState, useEffect } from 'react';

import StyledDataField from './StyledDataField';

const DataFieldConfirmPassword = ({ title, state, setState, isInvalid, setIsInvalid, password }) => {
	const [errorMessage, setErrorMessage] = useState('');

	const getIsInvalid = newValue => {
		if (newValue.length === 0) {
			setErrorMessage('Required');
			return true;
		}

		if (password !== newValue) {
			setErrorMessage('Passwords do not match');
			return true;
		}

		setErrorMessage('\u00A0');
		return false;
	};

	useEffect(() => {
		setIsInvalid(getIsInvalid(state));
	}, [password]);

	const onChange = e => {
		setState(e.target.value);
		setIsInvalid(getIsInvalid(e.target.value));
	};

	return (
		<div>
			<StyledDataField isInvalid={isInvalid}>
				<span className="datafield-title">{state && state.length > 0 ? 'Confirm Password' : '\u00A0'}</span>
				<input onChange={onChange} value={state} type="password" placeholder={'Confirm Password'} />
				<div className="datafield-error">
					{isInvalid && <i className="fas fa-exclamation"></i>}
					<span>{errorMessage}</span>
				</div>
			</StyledDataField>
		</div>
	);
};

export default DataFieldConfirmPassword;
