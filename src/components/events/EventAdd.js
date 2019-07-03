import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import moment from 'moment';
import _ from 'lodash';

import SkewedBox from '../SkewedBox';
import CenteredContent from '../CenteredContent';
import DataField from '../DataField';
import WAOButton from '../WAOButton';
import { createEvent as createEventAction } from '../../actions/eventActions';

// 500 x 262
const StyledEventAdd = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	.eventadd-new-button {
		width: 100px;
		height: 50px;
		cursor: pointer;
	}

	.eventadd-view {
		width: 100%;
		margin: auto;

		.eventadd-content {
			width: 100%;
			padding-left: 19px;
			padding-right: 30px;
			padding-bottom: 5px;

			.spacer {
				height: 10px;
			}

			.eventadd-content-split {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				.eventadd-content-split-column {
					width: 49%;
				}

				&:first-of-type(div) {
					margin-right: 2%;
				}
			}

			.eventadd-buttons {
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				align-items: center;

				margin-top: 15px;

				.eventadd-button-wrapper {
					margin-right: 5px;
				}
			}
		}
	}
`;

const EventAdd = ({ createEvent, canAdd, onAddStart, onAddEnd }) => {
	const createInitialState = () => {
		return {
			imageUrl: 'https://i.ytimg.com/vi/rehbyT4njbY/maxresdefault.jpg',
			startTimestamp: 1561852800, //moment().unix()
			endTimestamp: 1561906800, //moment().unix()
			title: 'Test Event 2',
			address: '318 Harrell Dr, Lafayette, LA 70503, USA',
			lat: 30.180797,
			lng: -92.06473890000001,
			description: 'Test'
		};
	};

	const [newEvent, setNewEvent] = useState(createInitialState());
	const [isAdding, setIsAdding] = useState(false);
	const [isSaving, setIsSaving] = useState(false);

	const onAddClick = e => {
		onAddStart();
		setIsAdding(true);
	};

	const onCancel = e => {
		setIsAdding(false);
		setNewEvent(createInitialState());
		onAddEnd();
	};

	const onSave = e => {
		setIsSaving(true);

		const eventToAdd = {
			imageUrl: newEvent.imageUrl,
			startTimestamp: parseInt(newEvent.startTimestamp), //  Make timestamp from date and time
			endTimestamp: parseInt(newEvent.endTimestamp), // same
			title: newEvent.title,
			address: newEvent.address,
			lat: newEvent.lat,
			lng: newEvent.lng,
			description: newEvent.description
		};

		console.log('New Event: ', eventToAdd);

		createEvent(newEvent)
			.then(() => {
				setIsAdding(false);
				onAddEnd();
				setNewEvent(createInitialState());
			})
			.finally(() => {
				setIsSaving(false);
			});
	};

	return (
		<StyledEventAdd>
			{!isAdding && <WAOButton title="Add New" color="purple" xl3 clickCallback={onAddClick} isDisabled={!canAdd} />}
			{isAdding && (
				<div className="eventadd-view">
					<SkewedBox clipPath="3% 0, 100% 0, 96% 100%, 0% 100%" color="darkgray" isSelected>
						<form id="event-add-form" noValidate onSubmit={onSave}>
							<CenteredContent>
								<div className="eventadd-content">
									<DataField statePropertyPath="title" formState={newEvent} formSetState={setNewEvent} title="Title" isText />
									<DataField statePropertyPath="imageUrl" formState={newEvent} formSetState={setNewEvent} title="Image URL" isText />
									<DataField statePropertyPath="startTimestamp" formState={newEvent} formSetState={setNewEvent} title="Start Date" isNumber />
									{/* <div className="spacer" /> */}
									<DataField statePropertyPath="endTimestamp" formState={newEvent} formSetState={setNewEvent} title="End Date" isNumber />
									<DataField statePropertyPath="address" formState={newEvent} formSetState={setNewEvent} title="Location" isLocation />
									<DataField statePropertyPath="description" formState={newEvent} formSetState={setNewEvent} title="Description" isTextArea />

									<div className="eventadd-buttons">
										<div className="eventadd-button-wrapper">
											<WAOButton title="Quit" color="red" md clickCallback={onCancel} isLoading={isSaving} isDisabled={isSaving} />
										</div>
										<WAOButton title="Save" color="green" md clickCallback={onSave} isLoading={isSaving} isDisabled={isSaving} />
									</div>
								</div>
							</CenteredContent>
						</form>
					</SkewedBox>
				</div>
			)}
		</StyledEventAdd>
	);
};

const mapStateToProps = state => ({});

export default connect(
	mapStateToProps,
	{ createEvent: createEventAction }
)(EventAdd);
