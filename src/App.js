import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import jwtDecode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import theme from './styles/theme';
import store from './store';
import setAuthToken from './utils/auth';
import { fetchUser, logoutUser } from './actions/authActions';
import { fetchAllEvents } from './actions/eventActions';
import styled from '@emotion/styled';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';

// Check for token to keep user loggied in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	const decoded = jwtDecode(token);

	// Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());
	} else {
		// Set user and isAuthenticated
		store.dispatch(fetchUser());
	}
}

store.dispatch(fetchAllEvents());

const StyledApp = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	overflow-y: hidden;

	.app-content {
		width: calc(100% - 60px);
		height: calc(100% - 20px);
		max-width: 1020px;
		background-color: #4d4d4d;
		padding: 20px 30px 0 30px;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		& div {
			-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
			-moz-box-sizing: border-box; /* Firefox, other Gecko */
			box-sizing: border-box;
		}

		.app-content-inner {
			width: 100%;
			height: 100%;
		}
	}
`;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<StyledApp>
					<div className="app-content">
						<div className="app-content-inner">
							<ToastContainer autoClose={2000} />
							<Routes />
						</div>
					</div>
				</StyledApp>
			</Provider>
		</ThemeProvider>
	);
}

export default App;
