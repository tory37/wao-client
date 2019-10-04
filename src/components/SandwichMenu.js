import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { openSidebar as openSidebarAction, closeSidebar as closeSidebarAction } from '../actions/sidebarActions';

import SkewedBox from './SkewedBox';
import CenteredContent from './CenteredContent';

const StyledSandwichMenu = styled.div`
    width: 45px;
    height: 45px;
    cursor: pointer;

    font-size: 18px;

    .sandwichmenu-wrapper {
        width: 100%;
        height: 100%;
    }
`;

const SandwichMenu = ({ isSidebarOpen, openSidebar, closeSidebar }) => {
    const onClick = () => {
        if (isSidebarOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    return (
        <StyledSandwichMenu>
            <div className="sandwichmenu-wrapper" onClick={onClick}>
                <SkewedBox color="#4A4A48">
                    <CenteredContent>
                        <i class="fas fa-bars"></i>
                    </CenteredContent>
                </SkewedBox>
            </div>
        </StyledSandwichMenu>
    )
};

const mapStateToProps = state => ({
	isSidebarOpen: state.sidebar
});

export default connect(
	mapStateToProps,
	{ openSidebar: openSidebarAction, closeSidebar: closeSidebarAction }
)(SandwichMenu);
