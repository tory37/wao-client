import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Header from './Header';
import BugReportModal from './BugReportModal';

const StyledLayout = styled.div`
	width: 100%;
	height: 100%;
	position: relative;

	.layout-header-wrapper {
		height: 60px;
		margin-bottom: 30px;

		@media only screen and (min-width: 410px) {
			margin-bottom: 50px;
		}

		@media only screen and (min-width: 810px) {
			margin-bottom: 40px;
		}
	}

	.layout-bugreportmodal-wrapper {
		position: absolute;
		bottom: 70px;
		z-index: 100;

		@media only screen and (min-width: 945px) {
			bottom: 50px;
		}
	}

	main {
		height: calc(100% - 165px);
		width: 100%;
		overflow-y: scroll;
		padding-top: 10px;

		@media only screen and (min-width: 810px) {
			height: calc(100% - 120px);
		}

		.layout-content {
			padding-bottom: 20px;
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
		<div className="layout-bugreportmodal-wrapper">
			<BugReportModal />
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
