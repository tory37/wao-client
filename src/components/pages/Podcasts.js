import React from 'react';
import styled from '@emotion/styled';

import SkewedBox from '../SkewedBox';
import LinkList from '../LinkList';
import LinkListButton from '../LinkListButton';

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
		margin-bottom: 40px;

		@media only screen and (min-width: 615px) {
			margin-right: 10px;
			margin-left: 0;
			width: calc(100% - 10px - 10px - ${props => props.linkListWidth}) !important;
			margin-bottom: 40px;
		}

		.podcasts-content-inner {
			padding: 10px;
		}
	}

	.podcasts-linklist {
		width: 100%;
		margin-bottom: 40px;

		@media only screen and (min-width: 615px) {
			width: ${props => props.linkListWidth};
			margin-bottom: 20px;
		}
	}
`;

const Podcasts = () => {
    const itunesUrl = '';
    const castroUrl = '';
    const googleUrl = '';
    const pocketCastsUrl = '';
    const overcastUrl = '';
    const radioPublicUrl = '';
    const stitcherUrl = '';
    const tuneInUrl = '';
    const rssUrl = '';
    
	return (
		<StyledPodcasts linkListWidth={linkListWidth}>
			<div className="podcasts-content">
				<SkewedBox color="#4a4a4a" isSelected>
					<div className="podcasts-content-inner">
						Episodes will be here
					</div>
				</SkewedBox>
			</div>
			<div className="podcasts-linklist">
                <LinkList title="Subscribe">
					<LinkListButton title="Apple" imageUrl="https://assets.podiant.co/img/apple.svg" color="#B150E2" url={itunesUrl} xl6/>
					<LinkListButton title="Castro" imageUrl="https://assets.podiant.co/img/castro.svg" color="#00B56F" url={castroUrl} xl6/>
					<LinkListButton title="Google" imageUrl="https://assets.podiant.co/img/google.svg" color="#F34A21" url={googleUrl} xl6/>
					<LinkListButton title="Pocket Casts" imageUrl="https://assets.podiant.co/img/pcast.svg" color="#F53E38" url={pocketCastsUrl} xl6/>
                    <LinkListButton title="Overcast" imageUrl="https://assets.podiant.co/img/overcast.svg" color="#FC7E0F" url={overcastUrl} xl6/>
					<LinkListButton title="RadioPublic" imageUrl="https://assets.podiant.co/img/radiopublic.svg" color="#CB0B24" url={radioPublicUrl} xl6/>
					<LinkListButton title="Stitcher" imageUrl="https://assets.podiant.co/img/stitcher.svg" color="black" url={stitcherUrl} xl6/>
					<LinkListButton title="TuneIn" imageUrl="https://assets.podiant.co/img/tunein.svg" color="#33B5A8" url={tuneInUrl} xl6/>
					<LinkListButton title="RSS" imageUrl="https://assets.podiant.co/img/rss.svg" color="#4a4a4a" url={rssUrl} xl6/>

				</LinkList>
			</div>
		</StyledPodcasts>
	);
};

export default Podcasts;
