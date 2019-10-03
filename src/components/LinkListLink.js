import React from 'react';
import styled from '@emotion/styled';

import PageCard from './PageCard';
import WAOButton from './WAOButton';

const StyledLinkListLink = styled.div`

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
`;

const LinkListLink = ({title, iconClass, imageUrl, color, url}) => {

	const openInNewTab = url => {
		var win = window.open(url, '_blank');
		win.focus();
	};

	return (
		<StyledLinkListLink>
            <div className="linklist-entry-full">
                <WAOButton title={title} iconClass={iconClass} imageUrl={imageUrl} color={color} clickCallback={() => openInNewTab(url)} xl6 />
            </div>
            <div className="linklist-entry-mini">
                <WAOButton iconClass={iconClass} color={color} clickCallback={() => openInNewTab(url)} xs />
            </div>
		</StyledLinkListLink>
	);
}

export default LinkListLink;
