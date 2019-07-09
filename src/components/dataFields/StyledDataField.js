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
		height: 200px;
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
