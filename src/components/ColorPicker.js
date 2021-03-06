import React from 'react';
import styled from '@emotion/styled';

const StyledColorPicker = styled.div`
	width: 100%;

	.color-picker-title {
		margin-right: 10px;
	}

	.color-picker-display {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-bottom: 10px;
	}

	.color-picker-edit {
		text-align: left;

		.color-picker-edit-title {
			font-size: 12px;
			color: white;
			margin-bottom: 5px;
		}

		.color-picker-colors {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
		}
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

const ColorPickerCheckbox = ({ color, onCheckboxClick, isSelected, isEditing }) => {
	const onClick = () => {
		if (isEditing) {
			onCheckboxClick(color);
		}
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
					<div className="color-picker-title">Theme:</div>
					<div className="color-picker-checkbox">
						<ColorPickerCheckbox color={selectedColor} isEditing={isEditing} />
					</div>
				</div>
			)}

			{isEditing && (
				<div className="color-picker-edit">
					<span className="color-picker-edit-title">Theme</span>
					<div className="color-picker-colors">
						{colorsArray.map(color => (
							<div className="color-picker-entry" key={color}>
								<div className="color-picker-checkbox">
									<ColorPickerCheckbox color={color} onCheckboxClick={onSelectColor} isSelected={color.toString() === selectedColor.toString()} isEditing={isEditing} />
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</StyledColorPicker>
	);
};

export default ColorPicker;
