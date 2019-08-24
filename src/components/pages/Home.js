import React from 'react';
import styled from '@emotion/styled';

import SkewedBox from '../SkewedBox';
import LinkList from '../LinkList';

const linkListWidth = '150px';

const StyledHome = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: flex-start;
	flex-wrap: wrap;

	.home-banner {
		margin-bottom: 10px;
		width: 100%;

		img {
			width: 100%;
		}
	}

	.home-header {
		width: 100%;
		font-size: 32px;
		font-weight: 600;
		margin-bottom: 10px;
		font-family: NinjaNaruto;
	}

	.home-content {
		width: calc(100% - 10px);
		margin-left: 10px;
		margin-bottom: 40px;

		@media only screen and (min-width: 615px) {
			margin-right: 10px;
			width: calc(100% - 10px - 10px - ${props => props.linkListWidth}) !important;
			margin-bottom: 10px;
		}
	}

	.home-linklist {
		width: 100%;
		margin-bottom: 40px;

		@media only screen and (min-width: 615px) {
			width: ${props => props.linkListWidth};
			margin-bottom: 20px;
		}
	}

	.home-second-row {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-start;
		flex-wrap: wrap;

		width: 100%;

		.home-second-row-entry {
			width: 100%;
			margin-bottom: 40px;

			@media only screen and (min-width: 615px) {
				width: calc(50% - 40px);
				margin-left: 10px;
				margin-right: 10px;
				margin-bottom: 20px;
			}
		}
	}

	.home-calendar {
		width: 100%;
		height: 400px;

		body {
			background-color: black !important;
		}
	}

	.divider {
		width: 80px;
		height: 40px;
		margin-left: 110px;
	}

	.body {
		padding: 10px 15px 10px 33px;
	}
`;

const Home = () => {
	return (
		<StyledHome linkListWidth={linkListWidth}>
			<div className="home-banner">
				<img alt="Weebs and Otakus Banner" src={process.env.PUBLIC_URL + '/img/banner.png'} />
			</div>
			<div className="home-content">
				<div className="home-header">Welcome Home</div>
				<div>We are a collection of artists, gamers, anime and Japanese culture fans creating content for themselves. What are you waiting for? Join us.</div>
			</div>
			<div className="home-linklist">
				<LinkList></LinkList>
			</div>

			<div className="home-second-row">
				<div className="home-second-row-entry">
					<div className="home-header">Latest News</div>
					<a className="twitter-timeline" data-theme="dark" data-link-color="#FAB81E" href="https://twitter.com/WeebsAndOtakus?ref_src=twsrc%5Etfw">
						Tweets by WeebsAndOtakus
					</a>
				</div>
				<div className="home-second-row-entry">
					<div className="home-header">Calendar</div>
					<iframe
						className="home-calendar"
						src="https://calendar.google.com/calendar/b/5/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=am4xNm5mZnExdWdsMmprMnAxOHZwaTY5NjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=OHNndTdmYXRobzU0M2c3NTk0MXE4NmJwcWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=bG10cGcxYWpja3Ruc2kzMWNoazRkb2IzMDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F6BF26&amp;color=%234285F4&amp;color=%23E67C73&amp;showCalendars=1&amp;showPrint=0&amp;title=Weebs%20%26%20Otakus&amp;showTitle=0&amp;showDate=0&amp;showNav=1&amp;showTabs=0"
						frameBorder="0"
						scrolling="no"
					></iframe>
				</div>
			</div>
		</StyledHome>
	);
};

export default Home;
