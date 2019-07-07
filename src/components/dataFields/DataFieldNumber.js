import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import StyledDataField from './StyledDataField';

const DataFieldNumber = ({ title, state, setState, isRequired, min, max, step, isInt }) => {
	const [errorMessage, setErrorMessage] = useState('');

	const getIsInvalid = newValue => {
		
		let number = parseFloat(newValue);

		if (isRequired && _.isEmpty(number)) {
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
		setState({
			...state,
			isInvalid: getIsInvalid(state.value)
		});
	}, []);

	const onChange = e => {
		setState({
			value: e.target.value,
			isInvalid: getIsInvalid(e.target.value)
		});
	};

	return (
		<StyledDataField isInvalid={state.isInvalid}>
			<span className="datafield-title">{state.value && state.value.length > 0 ? title : '\u00A0'}</span>
			<input onChange={onChange} onKeyUp={onChange} value={state.value} type="number" step={step} min={min} max={max} placeholder={title} />
			<div className="datafield-error">
				{state.isInvalid && <i className="fas fa-exclamation"></i>}
				<span>{errorMessage}</span>
			</div>
		</StyledDataField>
	);
};

export default DataFieldNumber;
