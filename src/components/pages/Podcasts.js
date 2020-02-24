import React from 'react';
import styled from '@emotion/styled';

import SectionHeader from 'styles/SectionHeader';

const linkListWidth = '175px';

const StyledPodcasts = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: flex-start;
	flex-wrap: wrap;

	.podcasts-content {
		width: calc(100% - 10px);
		text-align: center;
		
		iframe {
			width: 250px;
			height: 158px;

			@media only screen and (min-width: 615px) {
				width: 100%;
				text-align: center;
				width: 560px;
				height: 315px;
			}
		}

		.podcasts-content-inner {
			padding: 10px;
		}
	}

	/* .podcasts-linklist {
		width: 100%;
		margin-bottom: 40px;

		@media only screen and (min-width: 615px) {
			width: ${props => props.linkListWidth };
			margin-bottom: 20px;
		}
	} */
`;

const Podcasts = () => {
	// const itunesUrl = '';
	// const castroUrl = '';
	// const googleUrl = '';
	// const pocketCastsUrl = '';
	// const overcastUrl = '';
	// const radioPublicUrl = '';
	// const stitcherUrl = '';
	// const tuneInUrl = '';
	// const rssUrl = '';

	return (
		<StyledPodcasts linkListWidth={ linkListWidth }>
			<SectionHeader aligned="center">Our Podcast</SectionHeader>
			<div className="podcasts-content">
				<iframe src="https://www.youtube.com/embed/videoseries?list=PLIEslNtaROnzNIQsHHVDBDPugnEEjPa9i" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			{/* <div className="podcasts-linklist">
                <LinkList title="Subscribe">
					<LinkListButton title="Apple" imageUrl="https://assets.podiant.co/img/apple.svg" color="#B150E2" url={itunesUrl} xl6/>
					<LinkListButton title="Castro" imageUrl="https://assets.podiant.co/img/castro.svg" color="#7289da" url={castroUrl} xl6/>
					<LinkListButton title="Google" imageUrl="https://assets.podiant.co/img/google.svg" color="#FF0000" url={googleUrl} xl6/>
					<LinkListButton title="Pocket Casts" imageUrl="https://assets.podiant.co/img/pcast.svg" color="#00aced" url={pocketCastsUrl} xl6/>
                    <LinkListButton title="Overcast" imageUrl="https://assets.podiant.co/img/overcast.svg" color="#3C5A99" url={overcastUrl} xl6/>
					<LinkListButton title="RadioPublic" imageUrl="https://assets.podiant.co/img/radiopublic.svg" color="#3C5A99" url={radioPublicUrl} xl6/>
					<LinkListButton title="Stitcher" imageUrl="https://assets.podiant.co/img/stitcher.svg" color="#3C5A99" url={stitcherUrl} xl6/>
					<LinkListButton title="TuneIn" imageUrl="https://assets.podiant.co/img/tunein.svg" color="#3C5A99" url={tuneInUrl} xl6/>
					<LinkListButton title="RSS" imageUrl="https://assets.podiant.co/img/rss.svg" color="#3C5A99" url={rssUrl} xl6/>

				</LinkList>
			</div> */}
		</StyledPodcasts>
	);
};

export default Podcasts;
