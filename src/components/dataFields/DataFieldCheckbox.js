import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import StyledDataField from './StyledDataField';

const StyledDataFieldCheckbox = styled.div`
	cursor: pointer;

	.datafieldcheckbox-inner {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;

		.datafieldcheckbox-box {
			width: 20px;
			height: 20px;
			border: solid 3px black;
			margin-right: 5px;
			background-color: ${props => props.color};
			font-family: NinjaNaruto;
		}

		.datafieldcheckbox-title {
			font-size: 14px;
		}
	}
`;

const DataFieldText = ({ title, state, setState, isEditing, color }) => {
	const onChange = e => {
		if (isEditing) {
			setState(!state);
		}
	};

	return (
		<StyledDataField>
			<StyledDataFieldCheckbox color={color}>
				<div className="datafieldcheckbox-inner" onClick={onChange}>
					<div className="datafieldcheckbox-box">{state ? 'X' : '\u00A0'}</div>
					<div className="datafieldcheckbox-title">{title}</div>
				</div>
			</StyledDataFieldCheckbox>
		</StyledDataField>
	);
};

export default DataFieldText;
