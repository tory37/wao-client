import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { routeDefs } from './routeDefs';

import Layout from './components/Layout';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Events from './components/pages/Events';
import UserProfile from './components/pages/UserProfile';
import Verify from './components/pages/Verify';
import PasswordRequest from './components/pages/PasswordRequest';
import PasswordReset from './components/pages/PasswordReset';
import NotFound from './components/pages/NotFound';
import PrivateRoute from './components/PrivateRoute';

const Routes = () => (
	<Router>
		<Layout>
			<Switch>
				<Route exact path={routeDefs.home} component={Home} />
				<Route exact path={routeDefs.events} component={Events} />
				<Route exact path={routeDefs.login} component={Login} />
				<Route exact path={routeDefs.signup} component={Signup} />
				<Route exact path={routeDefs.verifyUser} component={Verify} />
				<Route exact path={routeDefs.requestPasswordReset} component={PasswordRequest} />
				<Route exact path={routeDefs.resetPassword} component={PasswordReset} />
				<PrivateRoute exact path={routeDefs.userProfile} component={UserProfile} />
				<Route component={NotFound} />
			</Switch>
		</Layout>
	</Router>
);

export default Routes;
