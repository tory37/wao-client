import React from 'react';
import styled from '@emotion/styled';

import PageCard from './PageCard';
import WAOButton from './WAOButton';

const StyledLinkList = styled.div`
	width: 100%;

	.linklist-title {
		font-family: NinjaNaruto;
	}

	.linklist-entries {
		width: 100%;

		@media only screen and (max-width: 614px) {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
		}

		.linklist-entry-full {
			@media only screen and (max-width: 614px) {
				display: none;
			}
		}

		.linklist-entry-mini {
			@media only screen and (min-width: 615px) {
				display: none;
			}
		}
	}
`;

function LinkList() {
	const facebookUrl = 'https://www.facebook.com/groups/339371983406620/';
	const discordUrl = 'https://discordapp.com/invite/4esrFJx';
	const youtubeUrl = 'https://www.youtube.com/channel/UCST-uKFhHNfQpf4M7B81LlQ';
	const twitterUrl = 'https://twitter.com/WeebsAndOtakus';

	const openInNewTab = url => {
		var win = window.open(url, '_blank');
		win.focus();
	};

	return (
		<StyledLinkList>
			<PageCard>
				<div className="linklist-title">Links</div>
				<div className="linklist-entries">
					<div className="linklist-entry-full">
						<WAOButton title="Facebook" iconClass="fab fa-facebook-f" color="#3C5A99" clickCallback={() => openInNewTab(facebookUrl)} xl3 />
					</div>
					<div className="linklist-entry-mini">
						<WAOButton iconClass="fab fa-facebook-f" color="#3C5A99" clickCallback={() => openInNewTab(facebookUrl)} xs />
					</div>

					<div className="linklist-entry-full">
						<WAOButton title="Discord" iconClass="fab fa-discord" color="#7289da" clickCallback={() => openInNewTab(discordUrl)} xl3 />					
					</div>
					<div className="linklist-entry-mini">
						<WAOButton iconClass="fab fa-discord" color="#7289da" clickCallback={() => openInNewTab(discordUrl)} xs />					
					</div>

					<div className="linklist-entry-full">
						<WAOButton title="Youtube" iconClass="fab fa-youtube" color="#FF0000" clickCallback={() => openInNewTab(youtubeUrl)} xl3 />
					</div>
					<div className="linklist-entry-mini">
						<WAOButton iconClass="fab fa-youtube" color="#FF0000" clickCallback={() => openInNewTab(youtubeUrl)} xs />
					</div>

					<div className="linklist-entry-full">
						<WAOButton title="Twitter" iconClass="fab fa-twitter" color="#00aced" clickCallback={() => openInNewTab(twitterUrl)} xl3 />
					</div>
					<div className="linklist-entry-mini">
						<WAOButton iconClass="fab fa-twitter" color="#00aced" clickCallback={() => openInNewTab(twitterUrl)} xs />
					</div>

				</div>
			</PageCard>
		</StyledLinkList>
	);
}

export default LinkList;
