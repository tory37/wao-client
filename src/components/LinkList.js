import React from 'react';
import styled from '@emotion/styled';

import PageCard from './PageCard';
import WAOButton from './WAOButton';

const StyledLinkList = styled.div`
    width: 100%;
`;

function LinkList() {
    return (
        <StyledLinkList>
            <PageCard>
                <div className="linklist-button">
                <WAOButton title={'Facebook'} color="#3C5A99" clickCallback={() => onSelectTab(openTab)} isSelected={selectedTab === openTab} />

                </div>
            </PageCard>
        </StyledLinkList>
    )
}

export default LinkList;