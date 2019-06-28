import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Header from './Header';

const StyledLayout = styled.div`
	width: 100%;
	position: relative;

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
		<Header />
		<main>{children}</main>
	</StyledLayout>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
