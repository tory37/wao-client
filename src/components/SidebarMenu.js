import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import {closeSidebar as closeSidebarAction } from '../actions/sidebarActions';

import SkewedBox from './SkewedBox';
import CenteredContent from './CenteredContent';

const StyledSidebarMenu = styled.div`
    width:100px;
    height: 200px;
`;

const SidebarMenu = ({children, isSidebarOpen, closeSidebar }) => {
    return (
        <StyledSidebarMenu>
            <SkewedBox color="#4A4A48">
                <CenteredContent>
                   {children}
                </CenteredContent>
            </SkewedBox>
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
