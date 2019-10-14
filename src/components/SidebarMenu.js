import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import {closeSidebar as closeSidebarAction } from '../actions/sidebarActions';

import SkewedBox from './SkewedBox';
import CenteredContent from './CenteredContent';

const StyledSidebarMenu = styled.div`
    width: 180px;
`;

const SidebarMenu = ({children, isSidebarOpen, closeSidebar }) => {
    return (
        <StyledSidebarMenu>
            <CenteredContent>
                {children}
            </CenteredContent>
        </StyledSidebarMenu>
    )
};

const mapStateToProps = state => ({
	isSidebarOpen: state.sidebar
});

export default connect(
	mapStateToProps,
	{ closeSidebar: closeSidebarAction }
)(SidebarMenu);
