import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Header from './Header';

const StyledLayout = styled.div`
	width: 100%;
	height: 100%;

	.layout-header-wrapper {
		height: 60px;
		margin-bottom: 65px;
	}

	main {
		height: calc(100% - 155px);
		width: 100%;
		overflow-y: scroll;

		.layout-content {
			padding-bottom: 20px;
		}
	}

	@media only screen and (min-width: 810px) {
		.layout-header-wrapper {
			margin-bottom: 30px;
		}

		main {
			height: calc(100% - 100px);
		}
	}

	footer {
		position: absolute;
		bottom: 0;
	}
`;

const Layout = ({ children }) => (
	<StyledLayout>
		<div className="layout-header-wrapper">
			<Header />
		</div>
		<main>
			<div className="layout-content">{children}</div>
		</main>
	</StyledLayout>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
