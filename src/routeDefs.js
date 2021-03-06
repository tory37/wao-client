export const routeDefs = {
	home: '/',
	events: '/events',
	podcasts: '/podcasts',
	login: '/login',
	signup: '/signup',
	verifyUser: '/verify/:token?',
	passwordReset: '/password-reset',
	passwordChange: '/password-change/:token',
	userProfile: '/profile',
	photos: '/photos',
	adminDash: '/admin/dashboard',
	aboutUs: '/aboutus'
};

export const routePaths = {
	home: '/',
	events: '/events',
	podcasts: '/podcasts',
	login: '/login',
	signup: '/signup',
	verifyUser: '/verify',
	passwordReset: '/password-reset',
	passwordChange: '/password-change',
	userProfile: '/profile',
	photos: '/photos',
	adminDash: '/admin/dashboard',
	aboutUs: '/aboutus'
};

export const isOnRoute = (location, route) => {
	return location.pathname === route;
};
