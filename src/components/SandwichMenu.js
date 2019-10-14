import React, { useRef, useEffect } from 'react';
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
    const menuButton = useRef();

    useEffect(() => {
		// add when mounted
		document.addEventListener('mousedown', handleClick);

		// return function to be called when unmounted
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [isSidebarOpen]);
    

    const onClick = () => {
        if (isSidebarOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    const handleClick = e => {
		if (menuButton.current.contains(e.target)) {
			if (isSidebarOpen) {
				closeSidebar();
				return;
			}
			openSidebar();
			// inside click
			return;
		} else {
			// outside click
			closeSidebar();
		}
	};

    return (
        <StyledSandwichMenu>
            <div className="sandwichmenu-wrapper" ref={menuButton}>
                <SkewedBox color="#4A4A48">
                    <CenteredContent>
                        <i className="fas fa-bars"></i>
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
