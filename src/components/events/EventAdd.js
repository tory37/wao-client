import React, { useState } from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import _ from 'lodash';

import SkewedBox from '../SkewedBox';
import CenteredContent from '../CenteredContent';
import DataField from '../DataField';

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
			padding-right: 28px;
			padding-bottom: 5px;

			.eventadd-content-split {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;

				div {
					width: 49%;
				}

				&:first-child {
					margin-right: 2%;
				}
			}
		}
	}
`;

const EventAdd = () => {
	const [eventAdd, setEventAdd] = useState({
		imageUrl: '',
		startTimestamp: moment().unix(),
		endTimestamp: moment().unix(),
		title: '',
		location: {},
		description: '',
		isCreating: ''
	});

	const onAddClick = e => {
		const moddedState = _.clone(eventAdd);
		moddedState.isCreating = true;
		setEventAdd(moddedState);
	};

	const onSubmit = event => {};

	return (
		<StyledEventAdd>
			{!eventAdd.isCreating && (
				<div className="eventadd-new-button" onClick={onAddClick}>
					<SkewedBox clipPath="3% 0, 97% 0, 98% 100%, 0 100%" color="purple" shouldGrowOnHover fromCenter>
						<CenteredContent>
							<div className="text">Add New</div>
						</CenteredContent>
					</SkewedBox>
				</div>
			)}
			{eventAdd.isCreating && (
				<div className="eventadd-view">
					<SkewedBox clipPath="3% 0, 100% 0, 96% 100%, 0% 100%" color="darkgray" isSelected>
						<form noValidate onSubmit={onSubmit}>
							<CenteredContent>
								<div className="eventadd-content">
									<DataField statePropertyPath="title" formState={eventAdd} formSetState={setEventAdd} title="Title" isText />
									<DataField statePropertyPath="imageUrl" formState={eventAdd} formSetState={setEventAdd} title="Image URL" isText />
									<div className="eventadd-content-split">
										<DataField statePropertyPath="startDate" formState={eventAdd} formSetState={setEventAdd} title="Start Date" isText />
										<DataField statePropertyPath="startTime" formState={eventAdd} formSetState={setEventAdd} title="Start Time" isText />
									</div>
									<div className="eventadd-content-split">
										<DataField statePropertyPath="endDate" formState={eventAdd} formSetState={setEventAdd} title="End Date" isText />
										<DataField statePropertyPath="endTime" formState={eventAdd} formSetState={setEventAdd} title="End Time" isText />
									</div>
									<DataField statePropertyPath="location" formState={eventAdd} formSetState={setEventAdd} title="Location" isText />
									<DataField statePropertyPath="description" formState={eventAdd} formSetState={setEventAdd} title="Description" isTextArea />
								</div>
							</CenteredContent>
						</form>
					</SkewedBox>
				</div>
			)}
		</StyledEventAdd>
	);
};

export default EventAdd;
