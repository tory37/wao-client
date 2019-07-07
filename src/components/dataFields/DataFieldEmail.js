import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import StyledDataField from './StyledDataField';

const DataFieldEmail = ({ title, state, setState, isInvalid, setIsInvalid, isRequired }) => {
	const [errorMessage, setErrorMessage] = useState('');

	const getIsInvalid = newValue => {
		if (isRequired && newValue.length === 0) {
			setErrorMessage('Required');
			return true;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue)) {
			setErrorMessage('Invalid Email');
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
		<StyledDataField isInvalid={isInvalid}>
			<span className="datafield-title">{state && state.length > 0 ? title : '\u00A0'}</span>
			<input onChange={onChange} value={state} type="email" placeholder={title} />
			<div className="datafield-error">
				{isInvalid && <i className="fas fa-exclamation"></i>}
				<span>{errorMessage}</span>
			</div>
		</StyledDataField>
	);
};

export default DataFieldEmail;
