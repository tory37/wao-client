import React, { useState } from 'react';
import styled from '@emotion/styled';
import _ from 'lodash';

const StyledDataField = styled.div`
	text-align: left;

	label {
		width: 100%;
		display: inline-block;
		height: 54px;

		span {
			font-size: 12px;
			color: white;
		}

		input {
			border: solid 3px black;
			padding-left: 5px;
			padding-right: 5px;
			width: calc(100% - 10px);
		}

		textarea {
			padding: 5px;
			height: 200px;
			width: calc(100% - 10px);
			resize: none;
			border: solid 3px black;
		}
	}
`;

const DataField = ({ statePropertyPath, formState, formSetState, title, isText, isTextArea, isNumber, isEmail, isPassword }) => {
	const onChange = e => {
		// TODO: ASK ABOUT THIS
		const moddedState = _.clone(formState);
		moddedState[e.target.id] = e.target.value;
		formSetState(moddedState);
	};

	//const titleSpan = formState[statePropertyPath] && signup.username.length > 0 ? usernameLabel : '\u00A0';

	return (
		<StyledDataField>
			{isText ? (
				<label htmlFor={statePropertyPath}>
					<span>{formState[statePropertyPath] && formState[statePropertyPath].length > 0 ? title : '\u00A0'}</span>
					<input onChange={onChange} value={formState[statePropertyPath]} id={statePropertyPath} type="text" placeholder={title} />
				</label>
			) : isTextArea ? (
				<label htmlFor={statePropertyPath}>
					<span>{formState[statePropertyPath] && formState[statePropertyPath].length > 0 ? title : '\u00A0'}</span>
					<textarea onChange={onChange} value={formState[statePropertyPath]} id={statePropertyPath} placeholder={title} />
				</label>
			) : (
				<div>Please provide supported input type</div>
			)}
		</StyledDataField>
	);
};

export default DataField;
