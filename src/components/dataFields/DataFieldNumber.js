import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import StyledDataField from './StyledDataField';

const DataFieldNumber = ({ title, state, setState, isInvalid, setIsInvalid, isRequired, min, max, step, isInt }) => {
	const [errorMessage, setErrorMessage] = useState('');

	const getIsInvalid = newValue => {
		
		let number = parseFloat(newValue);

		if (isRequired && _.isNaN(number)) {
			setErrorMessage('Required');
			return true;
		}

		if (isInt && !Number.isInteger(number)) {
			setErrorMessage('Decimal value not allowed');
			return true;
		}

		if (newValue < min) {
			setErrorMessage('Minimum is ' + min);
			return true;
		}

		if (newValue > max) {
			setErrorMessage('Maximum is ' + max);
			return true;
		}

		setErrorMessage('\u00A0');
		return false;
	};

	useEffect(() => {
		setIsInvalid(getIsInvalid(state));
	}, [state]);

	const onChange = e => {
		console.log("Changed");
		setState(e.target.value);
	};

	return (
		<StyledDataField isInvalid={isInvalid}>
			<span className="datafield-title">{state && state.length > 0 ? title : '\u00A0'}</span>
			<input onChange={onChange} onKeyUp={onChange} value={state} type="number" step={step} min={min} max={max} placeholder={title} />
			<div className="datafield-error">
				{isInvalid && <i className="fas fa-exclamation"></i>}
				<span>{errorMessage}</span>
			</div>
		</StyledDataField>
	);
};

export default DataFieldNumber;
