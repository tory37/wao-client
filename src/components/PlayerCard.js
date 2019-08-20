import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import PageCard from './PageCard';

const border = '5px solid black';

const StyledPlayerCard = styled.div`
	width: 300px;
	height: 475px;
	margin-bottom: 20px;

	.playercard-name {
		text-align: left;
		border: ${props => props.border};
		padding: 5px;
		background-image: linear-gradient(to right, #050505, #505050);
		font-weight: 600;
		font-size: 18px;
	}

	.playercard-image {
		border-right: ${props => props.border};
		border-left: ${props => props.border};
		width: 235px;
		height: 235px;
		object-fit: cover;
		object-position: top;
	}

	.playercard-details {
		border: ${props => props.border};
		background-image: linear-gradient(to right, #050505, #505050);
		font-size: 12px;
		margin-top: -4px;
		padding: 5px;
		height: 165px;

		.playercard-details-text1 {
			font-size: 14px;
			margin-bottom: 10px;
		}

		.playercard-details-text2 {
			font-style: italic;
			font-size: 12;
		}
	}

    /* Stats are out for now */
	/* .playercard-stats {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;

		.playercard-stats-stat {
			border: ${props => props.border};
			font-size: 10px;
			background-image: linear-gradient(to right, gray, black, gray);
			padding: 5px;

			.playercard-stats-stat-title {
				font-weight: 600;
			}

			.playercard-stats-stat-value {
			}
		}
	} */
`;

const PlayerCard = ({ name, imageUrl, text1, text2, stats, iconName }) => {
	const [text1Split, setText1Split] = useState([]);

	useEffect(() => {
		if (text1) {
			setText1Split(text1.split('|'));
		}
	}, [text1]);

	return (
		<StyledPlayerCard border={border}>
			<PageCard>
				<div className="playercard-name">{name}</div>
				<img className="playercard-image" src={imageUrl} />
				<div className="playercard-details">
					<div className="playercard-details-text1">
						{text1Split.map((text, index) => {
							return (
								<>
									<span>{text}</span>
									{iconName && index !== text1Split.length - 1 && <i className={iconName}></i>}
								</>
							);
							if (index !== text1Split.length - 1) {
							}
						})}
					</div>
					<div className="playercard-details-text2">{text2}</div>
				</div>

				{/* Stats are out for now
                    <div className="playercard-stats">
					{stats &&
						stats.map(stat => (
							<div className="playercard-stats-stat">
								<span className="playercard-stats-stat-title">{stat.title}</span>
								<span>{': '}</span>
								<span className="playercard-stats-stat-value">{stat.value}</span>
							</div>
						))}
				</div> */}
			</PageCard>
		</StyledPlayerCard>
	);
};

export default PlayerCard;
