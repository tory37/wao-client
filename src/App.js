import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import jwtDecode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import theme from './styles/theme';
import store from './store';
import setAuthToken from './utils/auth';
import { fetchUser, logoutUser } from './actions/authActions';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';

// Check for token to keep user loggied in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwtDecode(token);
  // Set user and isAuthenticated
  store.dispatch(fetchUser());

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ToastContainer />
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
