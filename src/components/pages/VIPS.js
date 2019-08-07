import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Link, withRouter, Route } from 'react-router-dom';

import WAOButton from '../WAOButton';
import PageCard from '../PageCard';
import WAOSuperButton from '../WAOSuperButton';

const StyledVIPS = styled.div`
	width: 100%;
	height: 100%;

	.vips-tabs {
		width: 100%;
		margin-bottom: 20px;

		@media only screen and (max-width: 499px) {
			display: none;
		}

		.vips-tabs-inner {
			max-width: 500px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			margin: auto;
		}
	}

	.vips-superbutton {
		width: 100%;
		text-align: center;
		margin-bottom: 20px;

		@media only screen and (min-width: 500px) {
			display: none;
		}
	}

	.vips-content {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;

		flex-wrap: wrap;

		.vips-card-wrapper {
			width: 350px;
			margin-bottom: 20px;

			.vips-card {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;

				.vips-card-header {
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

					.vips-card-content {
						width: 150px;
					}
				}

				.vips-card-data {
					/* display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: flex-start;*/

					margin-bottom: 10px;

					.vips-card-data-title {
						font-weight: 600;
						text-align: left;
					}

					.vips-card-data-content {
						margin-left: 10px;
						text-align: left;
						font-size: 14px;
					}
				}
			}
		}
	}
`;

const Card = () => {};

const Founders = ({}) => {
	return (
		<div className="vips-content">
			<div className="vips-card-wrapper">
				<PageCard>
					<div className="vips-card">
						<div className="vips-card-header">
							<img src={'http://drive.google.com/uc?export=view&id=1rkJKBznDbGqrb83wNrF4YoB3OuxjuS0W'} />
							<div className="vips-card-content">
								<div className="vips-card-data">
									<div className="vips-card-data-title">Name:</div>
									<div className="vips-card-data-content">Tory</div>
								</div>
								<div className="vips-card-data">
									<div className="vips-card-data-title">Roles:</div>
									<div className="vips-card-data-content">
										Podcast Host
										<br />
										Software Engineer
										<br />
										Facebook Mod
										<br />
										Discord Admin
									</div>
								</div>
								<div className="vips-card-data">
									<div className="vips-card-data-title">Favorite Anime:</div>
									<div className="vips-card-data-content">Fullmetal Alchemist</div>
								</div>
							</div>
						</div>
						<div className="vips-card-data">
							<div className="vips-card-data-title">Bio:</div>
							<div className="vips-card-data-content">Tory is a software engineer, drummer, weight lifter, and all out weeb. He enjoys dark, cold rooms where he can cover up and code, watch tv, play games or listen music.</div>
						</div>
					</div>
				</PageCard>
			</div>

			<div className="vips-card-wrapper">
				<PageCard>
					<div className="vips-card">
						<div className="vips-card-header">
							<img src={'http://drive.google.com/uc?export=view&id=1bkbpvdsZ3XRriH-11NtXyTACqfeXkbyQ'} />
							<div className="vips-card-content">
								<div className="vips-card-data">
									<div className="vips-card-data-title">Name:</div>
									<div className="vips-card-data-content">Brandon</div>
								</div>
								<div className="vips-card-data">
									<div className="vips-card-data-title">Roles:</div>
									<div className="vips-card-data-content">
										Podcast Host
										<br />
										Video Editor
										<br />
										Facebook Mod
										<br />
										Discord Admin
									</div>
								</div>
								<div className="vips-card-data">
									<div className="vips-card-data-title">Favorite Anime:</div>
									<div className="vips-card-data-content">Girl Watching Naruto</div>
								</div>
							</div>
						</div>
						<div className="vips-card-data">
							<div className="vips-card-data-title">Bio:</div>
							<div className="vips-card-data-content">Brandon is a drummer, singer, bio, bio bio bibibobiobiboibjasldfjlksadjf</div>
						</div>
					</div>
				</PageCard>
			</div>
		</div>
	);
};

const Contributors = ({}) => {
	return <div>contributors</div>;
};

const SuperPatrons = ({}) => {
	return <div>super patrons</div>;
};

const VIPS = ({ match, location, history }) => {
	useEffect(() => {}, []);

	const types = {
		founders: '/founders',
		contributors: '/contributors',
		superPatrons: '/superpatrons'
	};

	const onNavClick = route => {
		history.push(match.url + route);
	};

	return (
		<StyledVIPS>
			{console.log(location)}
			<div className="vips-tabs">
				<div className="vips-tabs-inner">
					<Link to={`${match.url}${types.founders}`}>
						<WAOButton title={'Founders'} color="blue" xl2 isSelected={false} />
					</Link>
					<Link to={`${match.url}${types.contributors}`}>
						<WAOButton title={'Contributors'} color="green" xl4 isSelected={false} />
					</Link>
					<Link to={`${match.url}${types.superPatrons}`}>
						<WAOButton title={'Super Patrons'} color="purple" xl6 isSelected={false} />
					</Link>
				</div>
			</div>

			<div className="vips-superbutton">
				<WAOSuperButton
					options={[
						{
							title: 'Founders',
							color: 'blue',
							onClick: () => onNavClick(types.founders)
						},
						{
							title: 'Contributors',
							color: 'green',
							onClick: () => onNavClick(types.contributors)
						},
						{
							title: 'Super Patrons',
							color: 'purple',
							onClick: () => onNavClick(types.superPatrons)
						}
					]}
				/>
			</div>

			<Route path={`${match.url}${types.founders}`} component={Founders} />
			<Route path={`${match.url}${types.contributors}`} component={Contributors} />
			<Route path={`${match.url}${types.superPatrons}`} component={SuperPatrons} />
		</StyledVIPS>
	);
};

const VIPSFounders = () => {};

export default withRouter(VIPS);
