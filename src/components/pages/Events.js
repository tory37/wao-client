import React, { useState } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import moment from 'moment';

import PageWrapper from '../PageWrapper';
import EventAdd from '../events/EventAdd';
import EventView from '../events/EventView';
import SkewedBox from '../SkewedBox';
import CenteredContent from '../CenteredContent';
import WAOButton from '../WAOButton';

// 500 x 262
const StyledEvents = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

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

const Events = ({ events, auth, isLoadingEvents }) => {
	const [isEditing, setIsEdit] = useState(false);
	const [isAdding, setIsAdd] = useState(false);
	const [shouldShowPast, setShouldShowPast] = useState(false);

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
		setShouldShowPast(true);
	};

	return (
		<PageWrapper>
			<StyledEvents>
				{auth.isAuthenticated && auth.user.roles.includes(`ADMIN`) && <EventAdd canAdd={!isEditing} onAddStart={onAddStart} onAddEnd={onAddEnd} />}

				{isAdding && (
					<div className="divider">
						<SkewedBox clipPath="76% 0, 100% 0, 26% 100%, 0% 100%" color="black" isSelected />
					</div>
				)}

				{events &&
					events.length > 0 &&
					events.map((event, i) => {
						if (shouldShowPast || event.endTimestamp > moment().unix()) {
							return (
								<div className="events-event-wrapper" key={event._id}>
									<EventView event={event} canEdit={!isEditing && auth.isAuthenticated && auth.user.roles.includes(`ADMIN`)} onEditStart={onEditStart} onEditEnd={onEditEnd} />
									{i < events.length - 1 && (
										<div className="divider">
											<SkewedBox clipPath="76% 0, 100% 0, 26% 100%, 0% 100%" color="black" isSelected />
										</div>
									)}
								</div>
							);
						}
						return;
					})}

				{(!events || events.length === 0) && (
					<div className="events-no-upcoming">
						<SkewedBox clipPath="0% 0, 97% 0, 100% 100%, 3% 100%" color="plum" isSelected={true}>
							<CenteredContent>{isLoadingEvents ? 'Loading Future Events' : 'No Upcoming Events'}</CenteredContent>
						</SkewedBox>
					</div>
				)}

				{!shouldShowPast && (
					<div className="events-show-past-button">
						<WAOButton title="Show Past" color="blue" xl3 clickCallback={onShowPastEvents} isLoading={isLoadingEvents} isDisabled={isLoadingEvents} />
					</div>
				)}
			</StyledEvents>
		</PageWrapper>
	);
};

const mapStateToProps = state => ({
	events: state.events,
	auth: state.auth,
	isLoadingEvents: state.isLoadingEvents
});

export default connect(
	mapStateToProps,
	{}
)(Events);
