import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Layout from './components/Layout';
// import PrivateRoute from './components/PrivateRoute';
// import Dashboard from './components/Dashboard';

const Routes = () => (
	<Router>
		<Layout>
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/signup" component={Signup} />
			{/* <Switch>
			<PrivateRoute exact path="/home" component={Dashboard} />
			<PrivateRoute exact path="/" component={Dashboard} />
		</Switch> */}
		</Layout>
	</Router>
);

export default Routes;
