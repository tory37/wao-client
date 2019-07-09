import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import PageWrapper from './PageWrapper';
import PageCard from './PageCard';
import LoadingOverlay from './LoadingOverlay';

const StyledPrivateRoute = styled.div`
	height: 300px;
`;

const PrivateRoute = ({ component: Component, auth, isLoadingAuth, ...rest }) => {
	if (isLoadingAuth) {
		return (
			<PageWrapper>
				<PageCard isLoading={true}>
					<StyledPrivateRoute />
				</PageCard>
			</PageWrapper>
		);
	} else {
		return <Route {...rest} render={props => (auth.isAuthenticated === true ? <Component {...props} /> : <Redirect to="login" />)} />;
	}
};

PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	isLoadingAuth: state.isLoadingAuth
});

export default connect(mapStateToProps)(PrivateRoute);
