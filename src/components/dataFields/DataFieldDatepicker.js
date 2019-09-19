import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import StyledDataField from './StyledDataField';

const DataFieldDatepicker = ({ title, state, setState, isInvalid, setIsInvalid, isRequired }) => {
	const [errorMessage, setErrorMessage] = useState('');

	const getIsInvalid = newValue => {
		if (isRequired && !newValue) {
			setErrorMessage('Required');
			return true;
		}

		setErrorMessage('\u00A0');
		return false;
	};

	useEffect(() => {
		setIsInvalid(getIsInvalid(state));
    }, []);

	const onChange = value => {
		setState(value);
		setIsInvalid(getIsInvalid(value));
	};

	return (
		<StyledDataField isInvalid={isInvalid}>
			<span className="datafield-title">{title}</span>
			<DatePicker
                selected={state}
                onChange={onChange}
                withPortal
                showTimeSelect
                timeFormat="hh:mma"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="Time"
            />
			<div className="datafield-error">
				{isInvalid && <i className="fas fa-exclamation"></i>}
				<span>{errorMessage}</span>
			</div>
		</StyledDataField>
	);
};

export default DataFieldDatepicker;
