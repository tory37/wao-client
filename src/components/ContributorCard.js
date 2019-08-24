import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import PageCard from './PageCard';

const border = '5px solid black';

const StyledContributorCard = styled.div`
	width: 240px;
	margin-bottom: 20px;
    text-align: center;

	@media only screen and (max-width: 1080px) {
		width: 300px;
	}

	.contributorcard-name {
		text-align: left;
		border: ${props => props.border};
		padding: 5px;
		background-image: linear-gradient(to right, #050505, #505050);
		font-weight: 600;
		font-size: 14px;
	}

	.contributorcard-image {
		border-right: ${props => props.border};
		border-left: ${props => props.border};
		width: 180px;
		height: 180px;
		object-fit: cover;
		object-position: top;
	}

	.contributorcard-details {
		border: ${props => props.border};
		background-image: linear-gradient(to right, #050505, #505050);
		font-size: 12px;
		margin-top: -4px;
		padding: 5px;
        height: 180px;
        overflow-y: scroll;

		.contributorcard-details-text1 {
			font-size: 14px;
			margin-bottom: 10px;
		}

		.contributorcard-details-text2 {
			font-style: italic;
			font-size: 12;
		}
	}

    /* Stats are out for now */
	/* .contributorcard-stats {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;

		.contributorcard-stats-stat {
			border: ${props => props.border};
			font-size: 10px;
			background-image: linear-gradient(to right, gray, black, gray);
			padding: 5px;

			.contributorcard-stats-stat-title {
				font-weight: 600;
			}

			.contributorcard-stats-stat-value {
			}
		}
	} */
`;

const ContributorCard = ({ name, imageUrl, text1, text2, stats, iconName, small }) => {
	const [text1Split, setText1Split] = useState([]);

	useEffect(() => {
		if (text1) {
			setText1Split(text1.split('|'));
		}
	}, [text1]);

	return (
		<StyledContributorCard border={border} isSmall={small}>
            <PageCard>
				<div className="contributorcard-name">{name}</div>
				<img className="contributorcard-image" src={process.env.PUBLIC_URL + '/img/' + imageUrl} />
				<div className="contributorcard-details">
					<div className="contributorcard-details-text1">
						{text1Split.map((text, index) => {
							return (
								<div key={index}>
									<span>{text}</span>
									{iconName && index !== text1Split.length - 1 && <i className={iconName}></i>}
								</div>
							);
							if (index !== text1Split.length - 1) {
							}
						})}
					</div>
					<div className="contributorcard-details-text2">{text2}</div>
				</div>

				{/* Stats are out for now
                    <div className="contributorcard-stats">
					{stats &&
						stats.map(stat => (
							<div className="contributorcard-stats-stat">
								<span className="contributorcard-stats-stat-title">{stat.title}</span>
								<span>{': '}</span>
								<span className="contributorcard-stats-stat-value">{stat.value}</span>
							</div>
						))}
                </div> */}
            </PageCard>
		</StyledContributorCard>
	);
};

export default ContributorCard;
