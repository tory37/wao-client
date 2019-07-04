import React from 'react';
import styled from '@emotion/styled';

const StyledColorPicker = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;

	.color-picker-title {
		margin-right: 10px;
	}

	.color-picker-display {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 10px;
	}

	.color-picker-entry {
	}
`;

const StyledColorPickerCheckbox = styled.div`
	width: 20px;
	height: 20px;
	border: solid 3px black;
	margin-right: 10px;
	background-color: ${props => props.color};
	font-family: NinjaNaruto;
	cursor: pointer;
`;

const ColorPickerCheckbox = ({ color, onCheckboxClick, isSelected }) => {
	const onClick = () => {
		onCheckboxClick(color);
	};

	return (
		<div onClick={onClick}>
			<StyledColorPickerCheckbox color={color}>{isSelected && <span>X</span>}</StyledColorPickerCheckbox>
		</div>
	);
};

const ColorPicker = ({ colorsArray, selectedColor, onSelectColor, isEditing }) => {
	return (
		<StyledColorPicker>
			{!isEditing && (
				<div className="color-picker-display">
					<div className="color-picker-title">Favorite Color:</div>
					<div className="color-picker-checkbox">
						<ColorPickerCheckbox color={selectedColor} />
					</div>
				</div>
			)}

			{isEditing &&
				colorsArray.map(color => (
					<div className="color-picker-entry" key={color}>
						<div className="color-picker-checkbox">
							<ColorPickerCheckbox color={color} onCheckboxClick={onSelectColor} isSelected={color.toString() === selectedColor.toString()} />
						</div>
					</div>
				))}
		</StyledColorPicker>
	);
};

export default ColorPicker;
