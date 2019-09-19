import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { setOpen as setOpenAction, setFixed as setFixedAction, setRejected as setRejectedAction } from '../actions/bugActions';

import WAOButton from './WAOButton';

const StyledBugReport = styled.div`
	width: 100%;
	border-bottom: solid 5px black;
	margin-top: 10px;
	padding-bottom: 5px;

	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	.bugreport-description {
		width: 60%;
		text-align: left;
	}

	.bugreport-reporter {
		width: 10%;
	}

	.bugreport-options {
		width: 30%;

		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
`;

const BugReport = ({ bugReport, setOpen, setFixed, setRejected }) => {
	const onFix = () => setFixed(bugReport._id);

	const onOpen = () => setOpen(bugReport._id);

	const onReject = () => setRejected(bugReport._id);

	return (
		<StyledBugReport>
			<div className="bugreport-description">{bugReport.description}</div>
			<div className="bugreport-reporter">{bugReport.reporter.username}</div>
			<div className="bugreport-options">
				{(bugReport.status === 'OPEN' || bugReport.status === 'FIXED') && <WAOButton title={'Reject'} color="red" sm clickCallback={onReject} />}
				{(bugReport.status === 'FIXED' || bugReport.status === 'WONTFIX') && <WAOButton title={'Open'} color="gold" sm clickCallback={onOpen} />}
				{(bugReport.status === 'OPEN' || bugReport.status === 'WONTFIX') && <WAOButton title={'Fix'} color="green" sm clickCallback={onFix} />}
			</div>
		</StyledBugReport>
	);
};

const mapStateToProps = state => ({});

export default connect(
	mapStateToProps,
	{
		setOpen: setOpenAction,
		setFixed: setFixedAction,
		setRejected: setRejectedAction
	}
)(BugReport);
