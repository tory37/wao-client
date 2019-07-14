export const routeDefs = {
	home: '/',
	events: '/events',
	login: '/login',
	signup: '/signup',
	verifyUser: '/verify/:token',
	passwordReset: '/password-reset',
	passwordChange: '/password-change/:token',
	userProfile: '/profile',
	photos: '/photos',
	adminDash: '/admin/dashboard'
};

export const isOnRoute = (location, route) => {
	return location.pathname === route;
};
