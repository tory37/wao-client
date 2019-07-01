// import React, { useEffect, useState } from 'react';
// import styled from '@emotion/styled';

// const StyledDatePicker = styled.div``;

// import React, { useEffect, useState } from 'react';
// import styled from '@emotion/styled';
// import _ from 'lodash';

// import StyledShadowedBox from '../styles/StyledShadowedBox';
// import SkewedBox from './SkewedBox';
// import CenteredContent from './CenteredContent';

// const StyledDatePicker = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: space-between;
// 	align-items: center;

// 	.datepicker-title {
// 		span {
// 			font-size: 12px;
// 			color: white;
// 		}
// 	}

// 	.datepicker-days,
// 	.datepicker-months,
// 	.datepicker-years,
// 	.datepicker-hours,
// 	.datepicker-minutes,
// 	.datepicker-ampms {
// 	}

// 	.datepicker-day,
// 	.datepicker-month,
// 	.datepicker-hour,
// 	.datepicker-minute {
// 		width: 50px;
// 		height: 40px;

// 		cursor: pointer;
// 	}

// 	.datepicker-ampm {
// 		width: 55px;
// 		height: 40px;
// 		cursor: pointer;
// 	}

// 	.datepicker-year {
// 		width: 70px;
// 		height: 40px;
// 		cursor: pointer;
// 	}

// 	.datepicker-not-selected {
// 		display: flex;
// 		flex-direction: column;
// 		justify-content: flex-start;
// 		align-items: center;
// 	}

// 	.datepicker-expanded-view {
// 		max-height: 140px;
// 		overflow-y: scroll;
// 	}
// `;

// const DataField = ({ momentDate, onChange }) => {
// 	const [state, setstate] = useState({
// 		day: momentDate.format('DD'),
// 		month: momentDate.format('MM'),
// 		year: momentDate.format('YYYY'),
// 		hour: momentDate.format('hh'),
// 		minute: momentDate.format('mm'),
// 		ampm: momentDate.format('A'),
// 		isDay: false,
// 		isMonth: false,
// 		isYear: false,
// 		isHour: false,
// 		isMinute: false,
// 		isAmpm: false
// 	});

// 	const onSelect = e => {
// 		const moddedState = _.clone(state);

// 		moddedState.isDay = false;
// 		moddedState.isMonth = false;
// 		moddedState.isYear = false;
// 		moddedState.isHour = false;
// 		moddedState.isMinute = false;
// 		moddedState.isAmpm = false;

// 		switch (e.name) {
// 			case 'day':
// 				moddedState.isDay = true;
// 			case 'month':
// 				moddedState.isMonth = true;
// 			case 'year':
// 				moddedState.isYear = true;
// 			case 'hour':
// 				moddedState.isHour = true;
// 			case 'minute':
// 				moddedState.isMinute = true;
// 			case 'ampm':
// 				moddedState.isAmpm = true;
// 			default:
// 				console.log(e.name, ' is not a supported click event for datepicker');
// 		}

// 		setstate(moddedState);
// 	};

// 	useEffect(() => {});

// 	return (
// 		<StyledDatePicker>
// 			<div className="datepicker-days">
// 				<div className="view-container">
// 					{!state.isDay && (
// 						<div className="datepicker-not-selected" data-name="day" onClick={onSelect}>
// 							<span className="datepicker-title">Day</span>
// 							<div className="datepicker-day">
// 								<SkewedBox shouldGrowOnHover useScale fromCenter color="red">
// 									<CenteredContent>{state.day}</CenteredContent>
// 								</SkewedBox>
// 							</div>
// 						</div>
// 					)}
// 					{state.isDay && <div className="datepicker-expanded-view"></div>}
// 				</div>
// 			</div>
// 			<div className="datepicker-months">
// 				<div className="view-container">
// 					{!state.isMonth && (
// 						<div className="datepicker-not-selected" data-name="month" onClick={onSelect}>
// 							<span className="datepicker-title">Month</span>
// 							<div className="datepicker-month">
// 								<SkewedBox shouldGrowOnHover useScale fromCenter color="red">
// 									<CenteredContent>{state.month}</CenteredContent>
// 								</SkewedBox>
// 							</div>
// 						</div>
// 					)}
// 				</div>
// 			</div>
// 			<div className="datepicker-years">
// 				<div className="view-container">
// 					{!state.isYear && (
// 						<div className="datepicker-not-selected" data-name="year" onClick={onSelect}>
// 							<span className="datepicker-title">Year</span>
// 							<div className="datepicker-year">
// 								<SkewedBox shouldGrowOnHover useScale fromCenter color="red">
// 									<CenteredContent>{state.year}</CenteredContent>
// 								</SkewedBox>
// 							</div>
// 						</div>
// 					)}
// 				</div>
// 			</div>
// 			<div className="datepicker-hours">
// 				<div className="view-container">
// 					{!state.isHour && (
// 						<div className="datepicker-not-selected" data-name="hour" onClick={onSelect}>
// 							<span className="datepicker-title">Hour</span>
// 							<div className="datepicker-hour">
// 								<SkewedBox shouldGrowOnHover useScale fromCenter color="red">
// 									<CenteredContent>{state.hour}</CenteredContent>
// 								</SkewedBox>
// 							</div>
// 						</div>
// 					)}
// 				</div>
// 			</div>
// 			<div className="datepicker-minutes">
// 				<div className="view-container">
// 					{!state.isMinute && (
// 						<div className="datepicker-not-selected" data-name="minute" onClick={onSelect}>
// 							<span className="datepicker-title">Minute</span>
// 							<div className="datepicker-minute">
// 								<SkewedBox shouldGrowOnHover useScale fromCenter color="red">
// 									<CenteredContent>{state.minute}</CenteredContent>
// 								</SkewedBox>
// 							</div>
// 						</div>
// 					)}
// 				</div>
// 			</div>
// 			<div className="datepicker-ampms">
// 				<div className="view-container">
// 					{!state.isAmpm && (
// 						<div className="datepicker-not-selected" data-name="ampm" onClick={onSelect}>
// 							<span className="datepicker-title">AM / PM</span>
// 							<div className="datepicker-day">
// 								<SkewedBox shouldGrowOnHover useScale fromCenter color="red">
// 									<CenteredContent>{state.ampm}</CenteredContent>
// 								</SkewedBox>
// 							</div>
// 						</div>
// 					)}
// 				</div>
// 			</div>
// 		</StyledDatePicker>
// 	);
// };

// export default DataField;
