import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import StyledDataField from './StyledDataField';

const DataFieldText = ({ title, state, setState, isRequired }) => {
	const [errorMessage, setErrorMessage] = useState('');

	const getIsInvalid = newValue => {
		if (isRequired && newValue.length === 0) {
			setErrorMessage('Required');
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
			<input onChange={onChange} value={state.value} type="text" placeholder={title} />
			<div className="datafield-error">
				{state.isInvalid && <i className="fas fa-exclamation"></i>}
				<span>{errorMessage}</span>
			</div>
		</StyledDataField>
	);
};

export default DataFieldText;
