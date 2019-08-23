import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import jwtDecode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import theme from './styles/theme';
import store from './store';
import setAuthToken from './utils/auth';
import { fetchUser, logoutUser, stopLoadingAuth } from './actions/authActions';
import { fetchAllEvents } from './actions/eventActions';
import styled from '@emotion/styled';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes';

const StyledApp = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	overflow-y: hidden;

	background-color: black;
	background-image: url('http://drive.google.com/uc?export=view&id=1NI9PopprjaTg9PaFumPKfJ7DUHGH7o5J');
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
	background-size: cover;

	a {
		color: white;

		&:visited {
			color: darkgreen(gold, 0.3);
		}
	}

	.app-content {
		width: calc(100% - 20px);
		padding: 0 10px 0 10px;

		@media only and screen (min-width: 350px) {
			width: calc(100% - 60px);
			padding: 0 30px 0 30px;
		}

		height: 100%;
		max-width: 1020px;
		background-color: rgba(40, 40, 40, 0.85);

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
	useEffect(() => {
		store.dispatch(fetchAllEvents());

		// isLoadingAuth state is true by default, must stop it at all branches
		// Check for token to keep user logged in
		if (localStorage['weebsandotakus-jwtToken']) {
			// Set auth token header auth
			const token = localStorage['weebsandotakus-jwtToken'];
			setAuthToken(token);
			// Decode token and get user info and exp
			const decoded = jwtDecode(token);

			// Check for expired token
			const currentTime = Date.now() / 1000; // to get in milliseconds
			if (decoded.exp < currentTime) {
				// Logout user
				store.dispatch(logoutUser());
				store.dispatch(stopLoadingAuth());
			} else {
				// Set user and isAuthenticated, this dispatches stopLoadingAuth
				store.dispatch(fetchUser());
			}
		} else {
			store.dispatch(stopLoadingAuth());
		}
	}, []);

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
