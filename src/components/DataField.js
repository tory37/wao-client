import React from 'react';
import styled from '@emotion/styled';
import _ from 'lodash';

import GoogleAutocomplete from './GoogleAutocomplete';
// import DatePicker from './DatePicker';
import InputMoment from 'input-moment';

import 'react-datepicker/dist/react-datepicker.css';

const StyledDataField = styled.div`
	text-align: left;
	width: 100%;

	label {
		width: 100%;
		display: inline-block;
		height: 54px;

		span {
			font-size: 12px;
			color: white;
		}

		input {
			border: solid 5px black;
			padding-left: 5px;
			padding-right: 5px;
			width: calc(100% - 20px);
		}

		textarea {
			padding: 5px;
			height: 200px;
			width: calc(100% - 20px);
			resize: none;
			border: solid 5px black;
		}

		.datafield-date {
		}

		.datafield-time {
			width: 100%;
		}
	}
`;

const DataField = ({ statePropertyPath, formState, formSetState, min, max, title, isText, isTextArea, isLocation, isNumber, isEmail, isPassword, isDate }) => {
	const onPlaceSelected = place => {
		console.log(place);
		let location = {
			address: place.formatted_address,
			lat: place.geometry.location.lat(),
			lng: place.geometry.location.lng()
		};
		console.log(location);
		const moddedState = _.clone(formState);
		moddedState.address = location.address;
		moddedState.lat = location.lat;
		moddedState.lng = location.lng;
		moddedState[statePropertyPath] = place.formatted_address;
		formSetState(moddedState);
	};

	const onLocationChange = e => {
		const moddedState = _.clone(formState);
		moddedState[statePropertyPath] = e.target.value;
		formSetState(moddedState);
	};

	const onDateChange = newDate => {
		const moddedState = _.clone(formState);
		moddedState[statePropertyPath] = newDate;
		formSetState(moddedState);
	};

	const onChange = e => {
		const moddedState = _.clone(formState);
		moddedState[e.target.id] = e.target.value;
		formSetState(moddedState);
	};

	return (
		<StyledDataField>
			<label htmlFor={statePropertyPath}>
				{isText ? (
					<div>
						<span>{formState[statePropertyPath] && formState[statePropertyPath].length > 0 ? title : '\u00A0'}</span>
						<input onChange={onChange} value={formState[statePropertyPath]} id={statePropertyPath} type="text" placeholder={title} />
					</div>
				) : isTextArea ? (
					<div>
						<span>{formState[statePropertyPath] && formState[statePropertyPath].length > 0 ? title : '\u00A0'}</span>
						<textarea onChange={onChange} value={formState[statePropertyPath]} id={statePropertyPath} placeholder={title} />
					</div>
				) : isLocation ? (
					<div>
						<span>{formState[statePropertyPath] && formState[statePropertyPath].length > 0 ? title : '\u00A0'}</span>
						<GoogleAutocomplete onPlaceChanged={onPlaceSelected} handleChange={onLocationChange} />
						{/* <input type="text" value={formState[statePropertyPath]} onChange={onLocationChange} id={statePropertyPath} placeholder={title} /> */}
					</div>
				) : isDate ? (
					<div>
						<div className="datafield-date">
							<InputMoment moment={formState[statePropertyPath]} onSave={onDateChange} />
							{/* <DatePicker momentDate={formState[statePropertyPath]} onChange={onDateChange} inline /> */}
						</div>
					</div>
				) : isNumber ? (
					<div>
						<span>{formState[statePropertyPath] || formState[statePropertyPath] === 0 ? title : '\u00A0'}</span>
						<input onChange={onChange} value={formState[statePropertyPath]} min={min} max={max} id={statePropertyPath} type="number" placeholder={title} />
					</div>
				) : (
					<div>Please provide supported input type</div>
				)}
			</label>
		</StyledDataField>
	);
};

export default DataField;
