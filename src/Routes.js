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
import PasswordReset from './components/pages/PasswordReset';
import PasswordChange from './components/pages/PasswordChange';
import AdminDash from './components/pages/AdminDash';
import AboutUs from './components/pages/AboutUs';
import NotFound from './components/pages/NotFound';
import PrivateRoute from './components/PrivateRoute';

const Routes = () => (
	<Router>
		<Layout>
			<Switch>
				<Route exact path={routeDefs.home} component={Home} />
				<Route exact path={routeDefs.events} component={Events} />
				<Route exact path={routeDefs.login + '/:goback?'} component={Login} />
				<Route exact path={routeDefs.signup} component={Signup} />
				<Route exact path={routeDefs.verifyUser} component={Verify} />
				<Route exact path={routeDefs.passwordReset} component={PasswordReset} />
				<Route exact path={routeDefs.passwordChange} component={PasswordChange} />
				<Route exact path={routeDefs.aboutUs} component={AboutUs} />
				<PrivateRoute exact path={routeDefs.userProfile} component={UserProfile} />
				<PrivateRoute exact path={routeDefs.adminDash} component={AdminDash} />
				<Route component={NotFound} />
			</Switch>
		</Layout>
	</Router>
);

export default Routes;
