import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import NewsTicker from './NewsTicker';
import UserMenu from './UserMenu';

const StyledLayout = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;

    .user-menu {
        position: absolute;
        right: 5px;
        top: 5px;
    }

    main {
        height: 100%;
    }

    footer {
        position: absolute;
        bottom: 0;
    }
`;

const Layout = ({ children }) => (
  <StyledLayout>
    <NewsTicker />
    <div className="user-menu">
      <UserMenu />
    </div>
    <main>{children}</main>
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
