import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import Header from './Header';
import BugReportModal from './BugReportModal';

const headerMarings = {
	width_0: '10px',
	width_410: '15px',
	width_500: '40px',
	width_945: '0'
}

const StyledLayout = styled.div`
	width: 100%;
	height: 100%;
	position: relative;

	.layout-header-wrapper {

		/* @media only screen and (min-width: 410px) {
			margin-bottom: 15px;
		}

		@media only screen and (min-width: 500px) {
			margin-bottom: 40px;
		}

		@media only screen and (min-width: 945px) {
			margin-bottom: 0;
		} */
	}

	.layout-bugreportmodal-wrapper {
		position: fixed;
		bottom: 50px;
		z-index: 100;
	}

	.layout-body-wrapper {
		height: calc(100% - 65px);
		width: 100%;
		overflow-y: scroll;
		padding-top: 10px;

		@media only screen and (min-width: 810px) {
			height: calc(100% - 90px);
		}

		main {
			.layout-content {
				min-height: calc(100vh - 140px);
			}
		}


		footer {
			text-align: center;
			font-size: 10px;
			
			border-top: solid 5px black;
			margin: 0 50px 0 50px;
			width: calc(100% - 100px);
			height: ${props => props.theme.footer.height};
			margin-top: ${props => props.theme.footer.marginTop};

			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;

			a {
				color: gold;
				text-decoration: none;

				&:hover {
					font-size: 14px;
				}
			}
		}
	}
`;

const Layout = ({ children, auth }) => (
	<StyledLayout>
		<div className="layout-header-wrapper">
			<Header />
		</div>
		{auth.isAuthenticated && (
			<div className="layout-bugreportmodal-wrapper">
				<BugReportModal />
			</div>
		)}
		<div className="layout-body-wrapper">
			<main>
				<div className="layout-content">{children}</div>
			</main>
			<footer>
				<a href="mailto:support@weebsandotakus.com">Support</a>
			</footer>
		</div>
	</StyledLayout>
);

const mapStateToProps = state => ({
	auth: state.auth
});

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default connect(mapStateToProps)(Layout);
