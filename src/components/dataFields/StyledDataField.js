import styled from '@emotion/styled';

const StyledDataField = styled.div`
	text-align: left;
	width: 100%;
	display: inline-block;
	position: relative;

	.datafield-title {
		font-size: 12px;
		color: white;
	}

	/* React Datepicker */
	.react-datepicker__input-container {
		width: 100%;
	}
	
	.react-datepicker__current-month {
		font-size: 12px;
	}

	.react-datepicker-time__header {
		font-size: 12px;
	}

	.react-datepicker__portal {
		width: 100%;
		height: 100%;
	}

	.react-datepicker__portal .react-datepicker__day-name, .react-datepicker__portal .react-datepicker__day, .react-datepicker__portal .react-datepicker__time-name {
		width: 20px;
		line-height: 20px;
	}

	.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
		height: 20px;
    	padding: 5px 5px;
	}

	/* End React Datepicker */


	input {
		border: solid 5px black;
		padding-left: 5px;
		padding-right: 5px;
		width: calc(100% - 20px);

		outline: ${props => (props.isInvalid ? 'red solid 1px' : 'none')};

		&:focus {
			outline: yellow auto 5px;
		}
	}

	textarea {
		padding: 5px;
		height: 100px;
		width: calc(100% - 20px);
		resize: none;
		border: solid 5px black;

		outline: ${props => (props.isInvalid ? 'red solid 1px' : 'none')};
	}

	.datafield-error {
		margin-left: 5px;
		margin-top: 2px;
		font-size: 10px;
		text-align: right;

		i {
			color: red;
			margin-right: 3px;
		}
	}

	.datafield-date {
	}

	.datafield-time {
		width: 100%;
	}
`;

export default StyledDataField;
