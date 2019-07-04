import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Layout from './components/Layout';
import Events from './components/Events';
import UserProfile from './components/UserProfile';
import PrivateRoute from './components/PrivateRoute';

const Routes = () => (
	<Router>
		<Layout>
			<Route exact path="/" component={Home} />
			<Route exact path="/events" component={Events} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Signup} />
			<Switch>
				<PrivateRoute exact path="/profile" component={UserProfile} />
			</Switch>
		</Layout>
	</Router>
);

export default Routes;
