import React, { useState } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { fetchPastEvents as fetchPastEventsAction } from '../actions/eventActions';

import EventAdd from './events/EventAdd';
import EventView from './events/EventView';
import SkewedBox from './SkewedBox';
import CenteredContent from './CenteredContent';
import WAOButton from './WAOButton';

// 500 x 262
const StyledEvents = styled.div`
	.events-no-upcoming {
		width: 200px;
		height: 50px;
	}

	.events-event-wrapper {
		width: 100%;
	}

	.events-show-past-button {
		margin-top: 10px;
	}

	.divider {
		width: 100px;
		height: 30px;
		margin-left: 100px;
	}
`;

const Events = ({ events, hasFetchedPast, fetchPastEvents, auth }) => {
	const [isEditing, setIsEdit] = useState(false);
	const [isAdding, setIsAdd] = useState(false);
	const [isLoadingPast, setIsLoadingPast] = useState(false);

	const onAddStart = () => {
		setIsAdd(true);
		onEditStart();
	};

	const onAddEnd = () => {
		setIsAdd(false);
		onEditEnd();
	};

	const onEditStart = () => {
		setIsEdit(true);
	};

	const onEditEnd = () => {
		setIsEdit(false);
	};

	const onShowPastEvents = () => {
		console.log('Fetching');
		setIsLoadingPast(true);
		fetchPastEvents().then(() => {
			setIsLoadingPast(false);
		});
	};

	return (
		<StyledEvents>
			<div className="page-content">
				{auth.isAuthenticated && auth.user.roles.includes(`ADMIN`) && <EventAdd canAdd={!isEditing} onAddStart={onAddStart} onAddEnd={onAddEnd} />}

				{isAdding && (
					<div className="divider">
						<SkewedBox clipPath="76% 0, 100% 0, 26% 100%, 0% 100%" color="black" isSelected />
					</div>
				)}

				{events &&
					events.length > 0 &&
					events.map((event, i) => (
						<div className="events-event-wrapper" key={event._id}>
							<EventView event={event} canEdit={!isEditing && auth.isAuthenticated && auth.user.roles.includes(`ADMIN`)} onEditStart={onEditStart} onEditEnd={onEditEnd} />
							{i < events.length - 1 && (
								<div className="divider">
									<SkewedBox clipPath="76% 0, 100% 0, 26% 100%, 0% 100%" color="black" isSelected />
								</div>
							)}
						</div>
					))}

				{(!events || events.length === 0) && (
					<div className="events-no-upcoming">
						<SkewedBox clipPath="0% 0, 97% 0, 100% 100%, 3% 100%" color="plum" isSelected={true}>
							<CenteredContent>No Upcoming Events</CenteredContent>
						</SkewedBox>
					</div>
				)}

				{!hasFetchedPast && (
					<div className="events-show-past-button">
						<WAOButton title="Show Past" color="blue" xl3 clickCallback={onShowPastEvents} isLoading={isLoadingPast} isDisabled={isLoadingPast} />
					</div>
				)}
			</div>
		</StyledEvents>
	);
};

const mapStateToProps = state => ({
	events: state.events,
	hasFetchedPast: state.hasFetchedPast,
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ fetchPastEvents: fetchPastEventsAction }
)(Events);
