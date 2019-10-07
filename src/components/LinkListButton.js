import React from 'react';
import styled from '@emotion/styled';
import { Link, withRouter } from 'react-router-dom';

import WAOButton from './WAOButton';

const StyledLinkListButton = styled.div`


    .linklist-entry-full {
        @media only screen and (max-width: 690px) {
            display: ${props => props.shouldCollapse ? 'none' : 'inherit'};
        }
    }

    .linklist-entry-mini {
        display: none;

        @media only screen and (max-width: 690px) {
            display: ${props => props.shouldCollapse ? 'inherit' : 'none'};
        }
    }
`;

const LinkListButton = ({title, link, iconClass, imageUrl, isSelected, color, url, shouldCollapse, xl3, xl6}) => {

	const openInNewTab = url => {
        if (url) {
            var win = window.open(url, '_blank');
            win.focus();
        }
    };
    
    const fullContent = (<WAOButton title={title} iconClass={iconClass} isSelected={isSelected} imageUrl={imageUrl} color={color} clickCallback={() => openInNewTab(url)} xl3={xl3} xl6={xl6} />);
    const miniContent = (<WAOButton iconClass={iconClass} color={color} isSelected={isSelected} imageUrl={imageUrl} clickCallback={() => openInNewTab(url)} xs />);

	return (
		<StyledLinkListButton shouldCollapse={shouldCollapse}>
            <div className="linklist-entry-full">
                {link && <Link to={link}>
                   {fullContent}
                </Link>}
                {!link && fullContent}
            </div>
            <div className="linklist-entry-mini">
                {link && <Link to={link}>
                    {miniContent}
                </Link>}
                {!link && miniContent}
            </div>
		</StyledLinkListButton>
	);
}

export default LinkListButton;
