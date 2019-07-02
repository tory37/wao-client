import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import _ from 'lodash';
import moment from 'moment';

import Img from 'react-image';
import SkewedBox from '../SkewedBox';
import CenteredContent from '../CenteredContent';
import DataField from '../DataField';
import WAOButton from '../WAOButton';
// import { createEvent as createEventAction } from '../../actions/eventActions';

// 500 x 262
const StyledEventView = styled.div`
	width: 100%;

	.eventview-wrapper {
		width: 100%;

		.eventview-image-wrapper {
			width: 100%;

			img {
				width: 100%;
				border-bottom: solid 5px black;
			}
		}

		.eventview-content {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			padding: 10px;
			width: 100%;

			.eventview-entry {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;

				i {
					margin-right: 5px;
				}
			}

			.eventview-title {
				font-size: 22px;
				margin-bottom: 8px;
				text-decoration: underline;
				font-weight: 600;
			}

			.eventview-date {
				margin-bottom: 1px;
			}

			.eventview-location {
				text-decoration: none;
				color: white;

				margin-bottom: 5px;
				font-size: 12px;
				padding-left: 10px;
				padding-right: 10px;
				padding-bottom: 10px;
				padding-top: 10px;
				width: calc(100% + 20px);
				margin-left: -10px;
				cursor: pointer;

				.eventview-location-address {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					margin-right: 10px;
				}
				span {
					margin-left: auto;
					color: white;
					padding-right: 20px;
				}

				&:hover {
					background-color: black;

					span {
						text-decoration: underline;
					}
				}
			}

			.eventview-description {
				width: 100%;

				.header-row {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;

					margin-bottom: 5px;
					font-size: 12px;
					padding-left: 10px;
					padding-right: 10px;
					padding-bottom: 10px;
					padding-top: 10px;
					width: calc(100% + 20px);
					margin-left: -10px;
					cursor: pointer;

					&:hover {
						background-color: black;

						span {
							text-decoration: underline;
						}
					}

					div {
						text-decoration: underline;
					}

					span {
						font-size: 10px;
					}
				}

				.content {
					white-space: pre-wrap;
					text-align: left;

					overflow-y: scroll;
					border: solid 3px black;
					padding: 5px;

					&.expanded {
						max-height: 100px;
						text-overflow: ellipses;
					}
				}
			}

			.eventview-buttons {
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				align-items: center;
				margin-top: 10px;
				margin-left: auto;

				.eventview-button-wrapper {
					margin-right: 5px;
				}
			}
		}
	}
`;

const EventView = ({ event, canEdit, onEditStart, onEditEnd }) => {
	const [moddedEvent, setModdedEvent] = useState(_.clone(event));
	const [isEditing, setIsEditing] = useState(false);
	const [isSaving, setIsSaving] = useState(false);
	const [isDescExpanded, setIsDescExpanded] = useState(false);

	const onEdit = e => {
		onEditStart();
		setIsEditing(true);
	};

	const onCancel = e => {
		onEditEnd();
		setModdedEvent(_.clone(event));
		setIsEditing(false);
	};

	const onSave = e => {
		//setIsSaving(true);
		//saveEvent(moddedEvent);
	};

	const getDateDisplay = () => {
		let nowMoment = moment();
		let startMoment = moment(event.startTimestamp);
		let endMoment = moment(event.endTimestamp);

		let display = startMoment.format('dddd, MMMM D, YYYY [at] h:mm A') + ' - ';

		if (startMoment.isSame(endMoment, 'day')) {
			display += endMoment.format('h:mm A');
		} else {
			endMoment.format('dddd, MMMM D h:mm A');
		}

		return display;
	};

	const toggleDescExpanded = () => {
		setIsDescExpanded(!isDescExpanded);
	};

	return (
		<StyledEventView>
			<SkewedBox clipPath="0% 0, 100% 0, 100% 100%, 0% 100%" color="darkgray" isSelected={isEditing}>
				<CenteredContent>
					<div className="eventview-wrapper">
						{!isEditing && (
							<div className="eventview-image-wrapper">
								<Img src={event.imageUrl} />
							</div>
						)}

						<div className="eventview-content">
							{isEditing && <DataField statePropertyPath="imageUrl" formState={moddedEvent} formSetState={setModdedEvent} title="Image URL" isText />}

							{!isEditing && <div className="eventview-title">{event.title}</div>}

							{isEditing && <DataField statePropertyPath="title" formState={moddedEvent} formSetState={setModdedEvent} title="Title" isText />}

							{!isEditing && (
								<div className="eventview-date eventview-entry">
									<i className="far fa-clock"></i>
									<span>{getDateDisplay()}</span>
								</div>
							)}

							{isEditing && <DataField statePropertyPath="startTimestamp" formState={moddedEvent} formSetState={setModdedEvent} title="Start Timestamp" isNumber />}
							{isEditing && <DataField statePropertyPath="endTimestamp" formState={moddedEvent} formSetState={setModdedEvent} title="End Timestamp" isNumber />}

							{!isEditing && (
								<a href={'http://www.google.com/maps/place/' + event.location.lat + ',' + event.location.lng} className="eventview-location eventview-entry">
									<i className="fas fa-street-view"></i>
									<div className="eventview-location-address">{event.location.address}</div>
									<span>Show Map</span>
								</a>
							)}

							{isEditing && <DataField statePropertyPath="location.address" locationObjectStatePath="location" formState={moddedEvent} formSetState={setModdedEvent} title="Location" isLocation />}

							{!isEditing && (
								<div className="eventview-description">
									<div className="header-row" onClick={toggleDescExpanded}>
										<div>Description</div>
										{isDescExpanded ? <span>Collapse</span> : <span>Expand</span>}
									</div>
									<div className={'content ' + (isDescExpanded ? 'collapsed' : 'expanded')}>{event.description}</div>
								</div>
							)}

							{isEditing && <DataField statePropertyPath="description" formState={moddedEvent} formSetState={setModdedEvent} title="Description" isTextArea />}

							{!isEditing && (
								<div className="eventview-buttons">
									<WAOButton title="Edit" color="orange" clickCallback={onEdit} md isDisabled={!canEdit} />
								</div>
							)}

							{isEditing && (
								<div className="eventview-buttons">
									<div className="eventview-button-wrapper">
										<WAOButton title="Quit" color="red" clickCallback={onCancel} md />
									</div>
									<div>
										<WAOButton title="Save" color="Green" clickCallback={onSave} md />
									</div>
								</div>
							)}
						</div>
					</div>
				</CenteredContent>
			</SkewedBox>
		</StyledEventView>
	);
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(EventView);
