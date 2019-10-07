import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { routePaths, isOnRoute, routeDefs } from '../routeDefs';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import BugReportModal from './BugReportModal';
import SidebarMenu from './SidebarMenu';
import LinkList from './LinkList';
import LinkListButton from './LinkListButton';

const headerMarings = {
	width_0: '10px',
	width_500: '40px',
	width_945: '0'
};

const StyledLayout = styled.div`
	width: 100%;
	height: 100%;
	position: relative;

	.layout-header-wrapper {
		height: 60px;
		/* AUTH */
		/* height: 109px; */

		@media only screen and (min-width: 690px) {
			height: 65px;
		}
	}

	.layout-bugreportmodal-wrapper {
		position: fixed;
		bottom: 50px;
		z-index: 100;
	}

	.layout-body-wrapper {
		width: 100%;
		overflow-y: scroll;
		padding-top: 10px;
		position: relative;

		height: calc(100vh - 120px);

		@media only screen and (min-width: 690px) {
			height: calc(100vh - 76px);
		}

		.layout-body-sidebar {
			position: absolute;
			right: -200px;
			top: -5px;
			transition: right 300ms ease-in-out;
			z-index: 1000;

			&.open {
				right: 0;
			}

			@media only screen and (min-width: 690px) {
				display: none;
			}
		}

		main {
			min-height: calc(100% - 5px - ${props => props.theme.footer.height + ' - ' + props.theme.footer.marginTop});
		}

		footer {
			text-align: center;
			font-size: 10px;

			border-top: solid 5px black;
			width: 100%;
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

const Layout = ({ children, auth, isSidebarOpen, location }) => (
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
			<div className={'layout-body-sidebar' + (isSidebarOpen ? ' open' : '')}>
				<SidebarMenu>
					<LinkList title="Links">
						<LinkListButton title="Home" color="#4a4a4a" link={routeDefs.home} isSelected={isOnRoute(location, routePaths.home)}  shouldCollapse={false} xl3/>
						<LinkListButton title="Events" color="#4a4a4a" link={routeDefs.events} isSelected={isOnRoute(location, routePaths.events)} xl3/>
						<LinkListButton title="About Us" color="#4a4a4a" link={routeDefs.aboutUs} isSelected={isOnRoute(location, routePaths.aboutUs)} xl3/>
						{/* <LinkListButton title="Podcasts" color="#4a4a4a" link={routeDefs.podcasts} isSelected={isOnRoute(location, routePaths.podcasts)} xl3/> */}
					</LinkList>
				</SidebarMenu>
			</div>
			<main>{children}</main>
			<footer>
				<a href="mailto:weebsandotakus@gmail.com">Support</a>
			</footer>
		</div>
	</StyledLayout>
);

const mapStateToProps = state => ({
	auth: state.auth,
	isSidebarOpen: state.sidebar
});

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default connect(mapStateToProps)(withRouter(Layout));
