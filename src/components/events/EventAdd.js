import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import moment from 'moment';
import _ from 'lodash';
import useDataFieldState from '../../utils/useDataFieldState';

import SkewedBox from '../SkewedBox';
import CenteredContent from '../CenteredContent';
import DataField from '../DataField';
import WAOButton from '../WAOButton';
import { createEvent as createEventAction } from '../../actions/eventActions';
import DataFieldText from '../dataFields/DataFieldText';
import DataFieldNumber from '../dataFields/DataFieldNumber';
import DataFieldGoogleAddress from '../dataFields/DataFieldGoogleAddress';

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
	const [imageUrl, setImageUrl] = useState('');
	const [isImageUrlInvalid, setIsImageUrlInvalid] = useState(false);
	const [startTimestamp, setStartTimestamp] = useState(moment().unix());
	const [isStartTimestampInvalid, setIsStartTimestampInvalid] = useState(false);
	const [endTimestamp, setEndTimestamp] = useState(moment().unix());
	const [isEndTimestampInvalid, setIsEndTimestampInvalid] = useState(false);
	const [title, setTitle] = useState('');
	const [isTitleInvalid, setIsTitleInvalid] = useState(false);
	const [address, setAddress] = useState('');
	const [lat, setLat] = useState('');
	const [lng, setLng] = useState('');
	const [isAddressInvalid, setIsAddressInvalid] = useState(false);
	const [description, setDescription] = useState('');
	const [isDescriptionInvalid, setIsDescriptionInvalid] = useState(false);

	const [isAdding, setIsAdding] = useState(false);
	const [isSaving, setIsSaving] = useState(false);
	const [isInvalid, setIsInvalid] = useState(false);

	const resetState = () => {
		// Reset state
		setImageUrl('');
		setStartTimestamp(moment().unix());
		setEndTimestamp(moment().unix());
		setTitle('');
		setAddress('');
		setLat('');
		setLng('');
		setDescription('');
	};

	useEffect(() => {
		setIsInvalid(isImageUrlInvalid || isStartTimestampInvalid || isEndTimestampInvalid || isTitleInvalid || isAddressInvalid || isDescriptionInvalid);
	})

	const onAddClick = e => {
		onAddStart();
		setIsAdding(true);
	};

	const onCancel = e => {
		setIsAdding(false);
		resetState();
		onAddEnd();
	};

	const onSave = e => {
		setIsSaving(true);

		const eventToAdd = {
			imageUrl: imageUrl.value,
			startTimestamp: parseInt(startTimestamp.value), //  Make timestamp from date and time
			endTimestamp: parseInt(endTimestamp.value), // same
			title: title.value,
			address: address.value,
			lat: lat.value,
			lng: lng.value,
			description: description.value
		};

		console.log('New Event: ', eventToAdd);

		createEvent(eventToAdd)
			.then(() => {
				setIsAdding(false);
				onAddEnd();

				// Reset state
				resetState();
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
									<DataFieldText state={imageUrl} setState={setImageUrl} isInvalid={isImageUrlInvalid} setIsInvalid={setIsImageUrlInvalid} title="Image Url" isRequired />
									<DataFieldText state={title} setState={setTitle} isInvalid={isTitleInvalid} setIsInvalid={setIsTitleInvalid} title="Title" isRequired />
									<DataFieldNumber state={startTimestamp} setState={setStartTimestamp} isInvalid={isStartTimestampInvalid} setIsInvalid={setIsStartTimestampInvalid} title="Start Timestamp" min={1000} max={5000} step={1} isRequired />
									<DataFieldNumber state={endTimestamp} setState={setEndTimestamp} isInvalid={isEndTimestampInvalid} setIsInvalid={setIsEndTimestampInvalid} title="End Timestamp" min={1000} max={5000} step={1} isRequired />
									<DataFieldGoogleAddress address={address} setAddress={setAddress} setLat={setLat} setLng={setLng} isInvalid={isAddressInvalid} setIsInvalid={setIsAddressInvalid} title="Address" isRequired/>
									{/* <DataField statePropertyPath="address" formState={newEvent} formSetState={setNewEvent} title="Location" isLocation /> */}
									{/* <DataField statePropertyPath="description" formState={newEvent} formSetState={setNewEvent} title="Description" isTextArea /> */}

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
