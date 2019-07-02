import React, { useState } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import EventAdd from './events/EventAdd';
import EventView from './events/EventView';

// 500 x 262
const StyledEvents = styled.div`
	width: 100%;
	margin-top: 20px;

	.events-content {
		width: 100%;
		max-width: 500px;
		margin: auto;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}

	.divider {
		width: 80px;
		height: 40px;
		margin-left: 50px;
	}
`;

const Events = ({ events }) => {
	const [isEditing, setIsEdit] = useState(false);

	const onEditStart = () => {
		setIsEdit(true);
	};

	const onEditEnd = () => {
		setIsEdit(false);
	};

	return (
		<StyledEvents>
			<div className="events-content">
				<EventAdd canAdd={!isEditing} onAddStart={onEditStart} onAddEnd={onEditEnd} />
				{events && events.length > 0 && events.map((event, i) => <EventView event={event} canEdit={!isEditing} onEditStart={onEditStart} onEditEnd={onEditEnd} key={i} />)}

				{(!events || events.length === 0) && <div>No future events</div>}
			</div>
		</StyledEvents>
	);
};

const mapStateToProps = state => ({
	events: state.events
});

export default connect(mapStateToProps)(Events);
