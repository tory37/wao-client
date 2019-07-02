import React, { useState } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import EventAdd from './events/EventAdd';
import EventView from './events/EventView';
import SkewedBox from './SkewedBox';

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

		.events-event-wrapper {
			width: 100%;
		}
	}

	.divider {
		width: 100px;
		height: 30px;
		margin-left: 100px;
	}
`;

const Events = ({ events }) => {
	const [isEditing, setIsEdit] = useState(false);
	const [isAdding, setIsAdd] = useState(false);

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

	return (
		<StyledEvents>
			<div className="events-content">
				<EventAdd canAdd={!isEditing} onAddStart={onAddStart} onAddEnd={onAddEnd} />
				{isAdding && (
					<div className="divider">
						<SkewedBox clipPath="76% 0, 100% 0, 26% 100%, 0% 100%" color="black" isSelected />
					</div>
				)}

				{events &&
					events.length > 0 &&
					events.map((event, i) => (
						<div className="events-event-wrapper">
							<EventView event={event} canEdit={!isEditing} onEditStart={onEditStart} onEditEnd={onEditEnd} key={i} />
							{i < events.length - 1 && (
								<div className="divider">
									<SkewedBox clipPath="76% 0, 100% 0, 26% 100%, 0% 100%" color="black" isSelected />
								</div>
							)}
						</div>
					))}

				{(!events || events.length === 0) && <div>No future events</div>}
			</div>
		</StyledEvents>
	);
};

const mapStateToProps = state => ({
	events: state.events
});

export default connect(mapStateToProps)(Events);
