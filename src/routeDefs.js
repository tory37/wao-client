export const routeDefs = {
	home: '/',
	events: '/events',
	login: '/login',
	signup: '/signup',
	verifyUser: '/verify/:token',
	requestPasswordReset: '/password/request',
	resetPassword: '/password/reset',
    userProfile: '/profile',
    photos: '/photos'
};

export const isOnRoute = (location, route) => {
    return location.pathname === route;
}
