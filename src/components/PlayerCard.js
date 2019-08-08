import React from 'react';
import styled from '@emotion/styled';

import PageCard from './PageCard';

const StyledPlayerCard = styled.div`
	width: 350px;
	margin-bottom: 20px;

	.playercard-wrapper {
		width: 350px;
		margin-bottom: 20px;

		.playercard {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;

			.playercard-header {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: flex-start;

				img {
					width: 150px;
					height: 150px;
					border: 5px solid black;
					margin-right: 10px;
				}

				.playercard-content {
					width: 150px;
				}
			}

			.playercard-data {
				/* display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: flex-start;*/

				margin-bottom: 10px;

				.playercard-data-title {
					font-weight: 600;
					text-align: left;
				}

				.playercard-data-content {
					margin-left: 10px;
					text-align: left;
					font-size: 14px;
				}
			}
		}
	}
`;

const PlayerCard = () => {
	return (
		<StyledPlayerCard>
			<PageCard>
				<div className="playercard">
					<div className="playercard-header">
						<img src={'http://drive.google.com/uc?export=view&id=1rkJKBznDbGqrb83wNrF4YoB3OuxjuS0W'} />
						<div className="playercard-content">
							<div className="playercard-data">
								<div className="playercard-data-title">Name:</div>
								<div className="playercard-data-content">Tory</div>
							</div>
							<div className="playercard-data">
								<div className="playercard-data-title">Roles:</div>
								<div className="playercard-data-content">
									Podcast Host
									<br />
									Software Engineer
									<br />
									Facebook Mod
									<br />
									Discord Admin
								</div>
							</div>
							<div className="playercard-data">
								<div className="playercard-data-title">Favorite Anime:</div>
								<div className="playercard-data-content">Fullmetal Alchemist</div>
							</div>
						</div>
					</div>
					<div className="playercard-data">
						<div className="playercard-data-title">Bio:</div>
						<div className="playercard-data-content">Tory is a software engineer, drummer, weight lifter, and all out weeb. He enjoys dark, cold rooms where he can cover up and code, watch tv, play games or listen music.</div>
					</div>
				</div>
			</PageCard>
		</StyledPlayerCard>
	);
};

export default PlayerCard;
