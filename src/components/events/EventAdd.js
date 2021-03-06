import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import moment from 'moment';

import PageCard from 'components/PageCard';
import WAOButton from 'components/WAOButton';
import { createEvent as createEventAction } from 'store/events/actions';
import WAOForm from 'components/WAOForm';
import DataFieldText from 'components/dataFields/DataFieldText';
import DataFieldTextArea from 'components/dataFields/DataFieldTextArea';
import DataFieldDatepicker from 'components/dataFields/DataFieldDatepicker';
import DataFieldLocation from 'components/dataFields/DataFieldLocation';

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

const EventAdd = ( { createEvent, canAdd, onAddStart, onAddEnd } ) => {
	const [ imageUrl, setImageUrl ] = useState( '' );
	const [ isImageUrlInvalid, setIsImageUrlInvalid ] = useState( false );
	const [ startDate, setStartDate ] = useState( moment().unix() );
	const [ isStartDateInvalid, setIsStartDateInvalid ] = useState( false );
	const [ endDate, setEndDate ] = useState( moment().unix() );
	const [ isEndDateInvalid, setIsEndDateInvalid ] = useState( false );
	const [ title, setTitle ] = useState( '' );
	const [ isTitleInvalid, setIsTitleInvalid ] = useState( false );
	const [ address, setAddress ] = useState( '' );
	const [ lat, setLat ] = useState( '' );
	const [ lng, setLng ] = useState( '' );
	const [ isAddressInvalid, setIsAddressInvalid ] = useState( false );
	const [ description, setDescription ] = useState( '' );
	const [ isDescriptionInvalid, setIsDescriptionInvalid ] = useState( false );

	const [ isAdding, setIsAdding ] = useState( false );
	const [ isLoading, setisLoading ] = useState( false );
	const [ isInvalid, setIsInvalid ] = useState( false );

	const resetState = () => {
		// Reset state
		setImageUrl( '' );
		setStartDate( moment().unix() );
		setEndDate( moment().unix() );
		setTitle( '' );
		setAddress( '' );
		setLat( '' );
		setLng( '' );
		setDescription( '' );
	};

	useEffect( () => {
		setIsInvalid( isImageUrlInvalid || isStartDateInvalid || isEndDateInvalid || isTitleInvalid || isAddressInvalid || isDescriptionInvalid );
	} );

	const onAddClick = e => {
		onAddStart();
		setIsAdding( true );
	};

	const onCancel = e => {
		setIsAdding( false );
		resetState();
		onAddEnd();
	};

	const onSave = e => {
		if ( isAdding && !isLoading && !isInvalid ) {
			setisLoading( true );

			const eventToAdd = {
				imageUrl: imageUrl,
				startTimestamp: moment( startDate ).unix(), //  Make timestamp from date and time
				endTimestamp: moment( endDate ).unix(), // same
				title: title,
				address: address,
				lat: lat,
				lng: lng,
				description: description
			};

			console.log( 'New Event: ', eventToAdd );

			createEvent( eventToAdd )
				.then( () => {
					setIsAdding( false );
					onAddEnd();

					// Reset state
					resetState();
				} )
				.finally( () => {
					setisLoading( false );
				} );
		}
	};

	return (
		<StyledEventAdd>
			{ !isAdding && <WAOButton title="Add New" color="goldenrod" iconClass="far fa-plus-square" xl3 clickCallback={ onAddClick } isDisabled={ !canAdd } /> }
			{ isAdding && (
				<div className="eventadd-view">
					<PageCard>
						<WAOForm onSubmit={ onSave } canSubmitVarsArray={ [ isAdding, isLoading, isInvalid ] }>
							<div className="eventadd-content">
								<DataFieldText state={ imageUrl } setState={ setImageUrl } isInvalid={ isImageUrlInvalid } setIsInvalid={ setIsImageUrlInvalid } title="Image Url" isRequired />
								<DataFieldText state={ title } setState={ setTitle } isInvalid={ isTitleInvalid } setIsInvalid={ setIsTitleInvalid } title="Title" isRequired />
								<DataFieldTextArea state={ description } setState={ setDescription } isInvalid={ isDescriptionInvalid } setIsInvalid={ setIsDescriptionInvalid } title="Description" isRequired />
								<DataFieldLocation address={ address } setAddress={ setAddress } setLat={ setLat } setLng={ setLng } isInvalid={ isAddressInvalid } setIsInvalid={ setIsAddressInvalid } title="Address" isRequired />
								<DataFieldDatepicker state={ startDate } setState={ setStartDate } isInvalid={ isStartDateInvalid } setIsInvalid={ setIsStartDateInvalid } title="Start Timestamp" min={ moment().unix() } step={ 1 } isRequired />
								<DataFieldDatepicker state={ endDate } setState={ setEndDate } isInvalid={ isEndDateInvalid } setIsInvalid={ setIsEndDateInvalid } title="End Timestamp" min={ moment().unix() } step={ 1 } isRequired />

								<div className="eventadd-buttons">
									<div className="eventadd-button-wrapper">
										<WAOButton title="Quit" color="red" lg clickCallback={ onCancel } iconClass="far fa-stop-circle" isLoading={ isLoading } isDisabled={ isLoading } />
									</div>
									<WAOButton title="Save" color="green" lg clickCallback={ onSave } iconClass="far fa-play-circle" isLoading={ isLoading } isDisabled={ isLoading || isInvalid } isSubmit />
								</div>
							</div>
						</WAOForm>
					</PageCard>
				</div>
			) }
		</StyledEventAdd>
	);
};

const mapStateToProps = state => ( {} );

export default connect(
	mapStateToProps,
	{ createEvent: createEventAction }
)( EventAdd );
