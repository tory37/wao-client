import React, { useState } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { addNewBugReport as addNewBugReportAction } from '../actions/bugActions';

import WAOButton from './WAOButton';
import PageCard from './PageCard';
import DataFieldTextArea from './dataFields/DataFieldTextArea';

const StyledBugReportModal = styled.div`
	position: relative;

	.bugreportmodal-button {
		position: absolute;
	}

	.bugreportmodal-modal {
		bottom: 0;
		left: 10px;
		position: absolute;

		width: 250px;
		height: 325px;

		.bugreportmodal-header {
			font-size: 12px;
			text-align: left;
		}

		.eventadd-buttons {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;

			margin-top: 5px;

			.eventadd-button-wrapper {
				margin-right: 5px;
			}
		}
	}
`;

const BugReportModal = ({ addNewBugReport }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [description, setDescription] = useState('');
	const [isInvalid, setIsInvalid] = useState('');

	const onTriggerModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const onSave = () => {
		setIsLoading(true);

		addNewBugReport({
			description
		})
			.then(() => {
				setIsModalOpen(false);
				setDescription('');
			})
			.catch(() => {})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const onCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<StyledBugReportModal>
			<div className="bugreportmodal-button">
				<WAOButton title={'Report Bug'} color="red" xl3 clickCallback={onTriggerModal} isSelected={isModalOpen} />
			</div>

			{isModalOpen && (
				<div className="bugreportmodal-modal">
					<PageCard isLoading={isLoading} isSkewed>
						<div className="bugreportmodal-header">
							Please include:
							<br />
							- The url of the page this is ocurring on (if applicable)
							<br />
							- A description of when this bug is happening
							<br />- A description of the steps leading you to the bug
						</div>
						<DataFieldTextArea state={description} setState={setDescription} isInvalid={isInvalid} setIsInvalid={setIsInvalid} title="Description" isRequired />
						<div className="eventadd-buttons">
							<div className="eventadd-button-wrapper">
								<WAOButton title="Quit" color="red" md clickCallback={onCancel} isLoading={isLoading} isDisabled={isLoading} />
							</div>
							<WAOButton title="Save" color="green" md clickCallback={onSave} isLoading={isLoading} isDisabled={isLoading || isInvalid} isSubmit />
						</div>
					</PageCard>
				</div>
			)}
		</StyledBugReportModal>
	);
};

const mapStateToProps = state => ({});

export default connect(
	mapStateToProps,
	{ addNewBugReport: addNewBugReportAction }
)(BugReportModal);
