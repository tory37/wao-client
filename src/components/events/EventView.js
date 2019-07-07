import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import _ from 'lodash';
import moment from 'moment';
import { updateEvent as updateEventAction } from '../../actions/eventActions';
import StyledShadowedBox from '../../styles/StyledShadowedBox';

import PageCard from '../PageCard';
import Img from 'react-image';
import SkewedBox from '../SkewedBox';
import CenteredContent from '../CenteredContent';
import DataField from '../DataField';
import WAOButton from '../WAOButton';
import DataFieldText from '../dataFields/DataFieldText';
import DataFieldNumber from '../dataFields/DataFieldNumber';
import DataFieldLocation from '../dataFields/DataFieldLocation';

// 500 x 262
const StyledEventView = styled.div`
	width: 100%;

	.eventview-wrapper {
		width: 100%;

		.eventview-image-wrapper {
			width: 100%;

			img {
				width: calc(100% - 10px);
				border: solid 5px black;
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

				span {
					text-align: left;
				}
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

const EventView = ({ event, canEdit, onEditStart, onEditEnd, updateEvent }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [isSaving, setIsSaving] = useState(false);
	const [isDescExpanded, setIsDescExpanded] = useState(false);
	
	const [imageUrl, setImageUrl] = useState(event.imageUrl);
	const [isImageUrlInvalid, setIsImageUrlInvalid] = useState(false);
	const [startTimestamp, setStartTimestamp] = useState(event.startTimestamp);
	const [isStartTimestampInvalid, setIsStartTimestampInvalid] = useState(false);
	const [endTimestamp, setEndTimestamp] = useState(event.endTimestamp);
	const [isEndTimestampInvalid, setIsEndTimestampInvalid] = useState(false);
	const [title, setTitle] = useState(event.title);
	const [isTitleInvalid, setIsTitleInvalid] = useState(false);
	const [address, setAddress] = useState(event.address);
	const [isAddressInvalid, setIsAddressInvalid] = useState(false);
	const [lat, setLat] = useState(event.lat);
	const [lng, setLng] = useState(event.lng);
	const [description, setDescription] = useState(event.description);
	const [isDescriptionInvalid, setIsDescriptionInvalid] = useState(event.imageUrl);

	const [isInvalid, setIsInvalid] = useState(false);

	useEffect(() => {
		setIsInvalid(isImageUrlInvalid || isStartTimestampInvalid || isEndTimestampInvalid || isTitleInvalid || isAddressInvalid || isDescriptionInvalid);
	}, [isImageUrlInvalid, isStartTimestampInvalid, isEndTimestampInvalid, isTitleInvalid, isAddressInvalid, isDescriptionInvalid] )

	const onEdit = e => {
		onEditStart();
		setImageUrl(event.imageUrl);
		setStartTimestamp(event.startTimestamp);
		setEndTimestamp(event.endTimestamp);
		setTitle(event.title);
		setAddress(event.address);
		setLat(event.lat);
		setLng(event.lng);
		setDescription(event.description);
		setIsEditing(true);
	};

	const onCancel = e => {
		onEditEnd();
		setIsEditing(false);
	};

	const onSave = e => {
		setIsSaving(true);
		setIsEditing(true);

		const formattedModdedEvent = {
			imageUrl: imageUrl,
			startTimestamp: parseInt(startTimestamp), //  Make timestamp from date and time
			endTimestamp: parseInt(endTimestamp), // same
			title: title,
			address: address,
			lat: lat,
			lng: lng,
			description: description
		};

		updateEvent(event._id, formattedModdedEvent)
			.then(() => {
				setIsEditing(false);
				onEditEnd();
			})
			.finally(() => {
				setIsSaving(false);
			});
	};

	const getDateDisplay = () => {
		let nowMoment = moment();
		let startMoment = moment.unix(event.startTimestamp);
		let endMoment = moment.unix(event.endTimestamp);

		let differentYears = startMoment.year() !== endMoment.year();

		let display = startMoment.format('dddd, MMMM D, ' + (differentYears ? 'YYYY' : '') + ' [at] h:mm A') + ' - ';

		if (startMoment.isSame(endMoment, 'day')) {
			display += endMoment.format('h:mm A');
		} else {
			display += endMoment.format('dddd, MMMM D YYYY [at] h:mm A');
		}

		return display;
	};

	const toggleDescExpanded = () => {
		setIsDescExpanded(!isDescExpanded);
	};

	return (
		<StyledEventView>
			<PageCard isLoading={isSaving}>
				<div className="eventview-wrapper">
					{!isEditing && (
						<div className="eventview-image-wrapper">
							<Img src={event.imageUrl} />
						</div>
					)}

					<div className="eventview-content">
						{isEditing && <DataFieldText state={imageUrl} setState={setImageUrl} isInvalid={isImageUrlInvalid} setIsInvalid={setIsImageUrlInvalid} title="Image Url" isRequired />}

						{!isEditing && <div className="eventview-title">{event.title}</div>}

						{isEditing && <DataFieldText state={title} setState={setTitle} isInvalid={isTitleInvalid} setIsInvalid={setIsTitleInvalid} title="Title" isRequired />}

						{!isEditing && (
							<div className="eventview-date eventview-entry">
								<i className="far fa-clock"></i>
								<span>{getDateDisplay()}</span>
							</div>
						)}

						{isEditing && <DataFieldNumber state={startTimestamp} setState={setStartTimestamp} isInvalid={isStartTimestampInvalid} setIsInvalid={setIsStartTimestampInvalid} title="Start Timestamp" min={moment().unix()} step={1} isRequired />}
						{isEditing && <DataFieldNumber state={endTimestamp} setState={setEndTimestamp} isInvalid={isEndTimestampInvalid} setIsInvalid={setIsEndTimestampInvalid} title="End Timestamp" min={moment().unix()} step={1} isRequired />}

						{!isEditing && (
							<a href={'http://www.google.com/maps/place/' + event.lat + ',' + event.lng} target="_blank" className="eventview-location eventview-entry">
								<i className="fas fa-street-view"></i>
								<div className="eventview-location-address">{event.address}</div>
								<span>Show Map</span>
							</a>
						)}

						{isEditing && <DataFieldLocation address={address} setAddress={setAddress} setLat={setLat} setLng={setLng} isInvalid={isAddressInvalid} setIsInvalid={setIsAddressInvalid} title="Address" isRequired/>}

						{!isEditing && (
							<div className="eventview-description">
								<div className="header-row" onClick={toggleDescExpanded}>
									<div>Description</div>
									{isDescExpanded ? <span>Collapse</span> : <span>Expand</span>}
								</div>

								<div className={'content ' + (isDescExpanded ? 'collapsed' : 'expanded')}>{event.description}</div>
							</div>
						)}

						{isEditing && 									<DataFieldText state={description} setState={setDescription} isInvalid={isDescriptionInvalid} setIsInvalid={setIsDescriptionInvalid} title="Description" isRequired />}

						{!isEditing && canEdit && (
							<div className="eventview-buttons">
								<WAOButton title="Edit" color="orange" clickCallback={onEdit} md isDisabled={!canEdit} />
							</div>
						)}

						{isEditing && (
							<div className="eventview-buttons">
								<div className="eventview-button-wrapper">
									<WAOButton title="Quit" color="red" clickCallback={onCancel} />
								</div>
								<div>
									<WAOButton title="Save" color="green" clickCallback={onSave} isLoading={isSaving} isDisabled={isSaving || isInvalid} />
								</div>
							</div>
						)}
					</div>
				</div>
			</PageCard>
		</StyledEventView>
	);
};

const mapStateToProps = state => ({});

export default connect(
	mapStateToProps,
	{ updateEvent: updateEventAction }
)(EventView);
