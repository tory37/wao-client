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
			imageUrl: '',
			startMoment: moment().unix(),
			endMoment: moment().unix(),
			title: '',
			location: {},
			locationString: '',
			description: '',
			isCreating: false,
			isSaving: false
		};
	};

	const [eventAdd, setEventAdd] = useState(createInitialState());

	const onAddClick = e => {
		onAddStart();
		const moddedState = _.clone(eventAdd);
		moddedState.isCreating = true;
		setEventAdd(moddedState);
	};

	const onCancel = e => {
		onAddEnd();
		const moddedState = _.clone(eventAdd);
		moddedState.isCreating = false;
		setEventAdd(moddedState);
	};

	const onSave = e => {
		const moddedState = _.clone(eventAdd);
		moddedState.isSaving = true;
		setEventAdd(moddedState);

		const newEvent = {
			imageUrl: eventAdd.imageUrl,
			startTimestamp: eventAdd.startMoment, //  Make timestamp from date and time
			endTimestamp: eventAdd.endMoment, // same
			title: eventAdd.title,
			location: eventAdd.location,
			description: eventAdd.description
		};

		console.log('New Event: ', newEvent);

		createEvent(newEvent);
		// .then(() => {
		// 	setEventAdd(createInitialState());
		// onAddEnd();
		// })
		// .catch(e => {
		// 	const moddedState = _.clone(eventAdd);
		// 	moddedState.isSaving = false;
		// 	setEventAdd(moddedState);
		// });
	};

	return (
		<StyledEventAdd>
			{!eventAdd.isCreating && <WAOButton title="Add New" color="purple" xl3 clickCallback={onAddClick} isDisabled={!canAdd} />}
			{eventAdd.isCreating && (
				<div className="eventadd-view">
					<SkewedBox clipPath="3% 0, 100% 0, 96% 100%, 0% 100%" color="darkgray" isSelected>
						<form id="event-add-form" noValidate onSubmit={onSave}>
							<CenteredContent>
								<div className="eventadd-content">
									<DataField statePropertyPath="title" formState={eventAdd} formSetState={setEventAdd} title="Title" isText />
									<DataField statePropertyPath="imageUrl" formState={eventAdd} formSetState={setEventAdd} title="Image URL" isText />
									<DataField statePropertyPath="startMoment" formState={eventAdd} formSetState={setEventAdd} title="Start Date" isNumber />
									{/* <div className="spacer" /> */}
									<DataField statePropertyPath="endMoment" formState={eventAdd} formSetState={setEventAdd} title="End Date" isNumber />
									<DataField statePropertyPath="locationString" locationObjectStatePath="location" formState={eventAdd} formSetState={setEventAdd} title="Location" isLocation />
									<DataField statePropertyPath="description" formState={eventAdd} formSetState={setEventAdd} title="Description" isTextArea />

									<div className="eventadd-buttons">
										<div className="eventadd-button-wrapper">
											<WAOButton title="Quit" color="red" clickCallback={onCancel} md />
										</div>
										<div onClick={onSave}>
											<WAOButton title="Save" color="Green" md />
										</div>
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
