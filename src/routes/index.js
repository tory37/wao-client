const path = require('path');

const routes = {
  welcome: {
    path: '/',
    component: path.resolve(__dirname, 'welcome.js'),
  },
  login: {
    path: '/login',
    component: path.resolve(__dirname, 'login.js'),
  },
  signup: {
    path: '/signup',
    component: path.resolve(__dirname, 'signup.js'),
  },
};

const paths = Object.keys(routes).reduce((acc, route) => {
  acc[route] = routes[route].path;
  return acc;
}, {});

module.exports = { routes, paths };
