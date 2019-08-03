import React from 'react';
import styled from '@emotion/styled';

import PageCard from './PageCard';
import WAOButton from './WAOButton';

const StyledLinkList = styled.div`
    width: 100%;

    .linklist-title {
        font-family: NinjaNaruto;
    }
`;

function LinkList() {
    const facebookUrl = "https://www.facebook.com/groups/339371983406620/";
    const discordUrl = "";
    const youtubeUrl = "";
    const redditUrl = "";

    const openInNewTab = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
      }

    return (
        <StyledLinkList>
            <PageCard>
                <div className="linklist-title">Links</div>
                <WAOButton title="Facebook" iconClass="fab fa-facebook-f" color="#3C5A99" clickCallback={() => openInNewTab(facebookUrl)} xl3 />
                <WAOButton title="Discord" iconClass="fab fa-discord" color="#7289da" clickCallback={() => openInNewTab(discordUrl)} xl3 />
                <WAOButton title="Youtube" iconClass="fab fa-youtube" color="#FF0000" clickCallback={() => openInNewTab(youtubeUrl)} xl3 />
                <WAOButton title="Reddit" iconClass="fab fa-reddit-alien" color="#FF4500" clickCallback={() => openInNewTab(redditUrl)} xl3 />
            </PageCard>
        </StyledLinkList>
    )
}

export default LinkList;