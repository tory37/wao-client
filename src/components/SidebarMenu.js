import React from 'react';
import styled from '@emotion/styled';

import CenteredContent from './CenteredContent';

const StyledSidebarMenu = styled.div`
    width: 180px;
`;

const SidebarMenu = ( { children } ) => {
    return (
        <StyledSidebarMenu>
            <CenteredContent>
                { children }
            </CenteredContent>
        </StyledSidebarMenu>
    )
};

export default SidebarMenu;
