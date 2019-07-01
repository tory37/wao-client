import React from 'react';
import styled from '@emotion/styled';

import EventAdd from './events/EventAdd';

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

const Events = () => {
	return (
		<StyledEvents>
			<div className="events-content">
				<EventAdd />
			</div>
		</StyledEvents>
	);
};

export default Events;
