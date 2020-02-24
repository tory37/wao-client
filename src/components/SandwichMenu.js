import React, { useRef, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { openSidebar, closeSidebar } from '../store/sidebar/actions';

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

const SandwichMenu = () => {
    const menuButton = useRef();
    const isSidebarOpen = useSelector( state => state.isSidebarOpen );
    const dispatch = useDispatch();


    useEffect( () => {
        // add when mounted
        document.addEventListener( 'mousedown', handleClick );

        // return function to be called when unmounted
        return () => {
            document.removeEventListener( 'mousedown', handleClick );
        };
    }, [ isSidebarOpen ] );


    const onClick = () => {
        if ( isSidebarOpen ) {
            dispatch( closeSidebar() );
        } else {
            dispatch( openSidebar() );
        }
    }

    const handleClick = e => {
        if ( menuButton.current.contains( e.target ) ) {
            if ( isSidebarOpen ) {
                dispatch( closeSidebar() );
                return;
            }
            dispatch( openSidebar() );
            // inside click
            return;
        } else {
            // outside click
            dispatch( closeSidebar() );
        }
    };

    return (
        <StyledSandwichMenu>
            <div className="sandwichmenu-wrapper" ref={ menuButton }>
                <SkewedBox color="#4A4A48">
                    <CenteredContent>
                        <i className="fas fa-bars"></i>
                    </CenteredContent>
                </SkewedBox>
            </div>
        </StyledSandwichMenu>
    )
};

export default SandwichMenu;
