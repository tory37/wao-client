import React from 'react';
import styled from '@emotion/styled';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import SkewedBox from 'components/SkewedBox';
import LinkList from 'components/LinkList';
import LinkListButton from 'components/LinkListButton';
import SectionHeader from 'styles/SectionHeader';

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

	.home-content {
		width: calc(100% - 10px);
		margin-bottom: 30px;

		@media only screen and (min-width: 690px) {
			margin-right: 10px;
			margin-left: 0;
			width: calc(100% - 10px - 10px - ${props => props.linkListWidth }) !important;
		}

		.home-content-inner {
			padding: 10px;
		}
	}

	.home-linklist {
		width: 100%;
		margin-bottom: 20px;

		@media only screen and (min-width: 690px) {
			width: ${props => props.linkListWidth };
		}
	}

	.home-second-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;

		width: calc(100% - 30px);
		margin-right: 10px;

		.home-second-row-entry {
			width: 100%;
			margin-bottom: 30px;

			@media only screen and (min-width: 690px) {
				width: calc(50% - 40px);
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
	const facebookUrl = 'https://www.facebook.com/groups/339371983406620/';
	const discordUrl = 'https://discordapp.com/invite/4esrFJx';
	const youtubeUrl = 'https://www.youtube.com/channel/UCST-uKFhHNfQpf4M7B81LlQ';
	const twitterUrl = 'https://twitter.com/WeebsAndOtakus';

	return (
		<StyledHome linkListWidth={ linkListWidth }>
			<div className="home-banner">
				<img alt="Weebs and Otakus Banner" src={ process.env.PUBLIC_URL + '/img/banner.png' } />
			</div>
			<SectionHeader>Welcome Home</SectionHeader>
			<div className="home-content">
				<SkewedBox color="#4a4a4a" isSelected>
					<div className="home-content-inner">
						<div>We’ve just soft-launched this website! This truly is a massive effort for every one of us, and we’re happy to finally show it to you! If you have any ideas to make this thing better, send us an email at <a href="mailto:support@weebsandotakus.com">weebsandotakus@gmail.com</a>.</div>
						<br></br>
						<div>What started as a Facebook group is now much more, as made apparent by the links on this page! We will continue to do our best to use this website as a catalyst, tying in all of our separate communities into one W&O Family!</div>
						<br></br>
						<div>As more announcements are made and events are schedule, you’ll find them displayed below, respectively, under “Lastest News” and “Calendar”.</div>
						<br></br>
						<div>Lastly, to learn more about the group and the many folks working behind the scenes, click on the About tab above!</div>
						<br></br>
						<div>Thank you for joining us on this adventure.</div>
					</div>
				</SkewedBox>
			</div>
			<div className="home-linklist">
				<LinkList title="Links">
					<LinkListButton title="Facebook" iconClass="fab fa-facebook-f" color="#3C5A99" shouldCollapse url={ facebookUrl } xl3 />
					<LinkListButton title="Discord" iconClass="fab fa-discord" color="#7289da" shouldCollapse url={ discordUrl } xl3 />
					<LinkListButton title="Youtube" iconClass="fab fa-youtube" color="#FF0000" shouldCollapse url={ youtubeUrl } xl3 />
					<LinkListButton title="Twitter" iconClass="fab fa-twitter" color="#00aced" shouldCollapse url={ twitterUrl } xl3 />
				</LinkList>
			</div>

			<div className="home-second-row">
				<div className="home-second-row-entry">
					<SectionHeader>Latest News</SectionHeader>
					<TwitterTimelineEmbed sourceType="profile" screenName="weebsandotakus" />
				</div>
				<div className="home-second-row-entry">
					<SectionHeader>Calendar</SectionHeader>
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
