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
			flex-wrap: wrap;
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

const LinkList = ({title, children}) => {

	const openInNewTab = url => {
		var win = window.open(url, '_blank');
		win.focus();
	};

	return (
		<StyledLinkList>
			<PageCard>
				<div className="linklist-title">{title}</div>
				<div className="linklist-entries">
					{children}
				</div>
			</PageCard>
		</StyledLinkList>
	);
}

export default LinkList;
