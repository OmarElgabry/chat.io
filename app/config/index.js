'user strict';

var init = function () {

	if(process.env.NODE_ENV === 'production') {
		var redisURI 		= require('url').parse(process.env.REDIS_URL);
		var redisPassword 	= redisURI.auth.split(':')[1];
		return {
			dbURI: process.env.dbURI,
			sessionSecret: process.env.sessionSecret,
			facebook: {
				clientID: process.env.facebookClientID,
				clientSecret: process.env.facebookClientSecret,
				callbackURL: "/auth/facebook/callback",
				profileFields: ['id', 'displayName', 'photos']
			},
			twitter:{
				consumerKey: process.env.twitterConsumerKey,
				consumerSecret: process.env.twitterConsumerSecret,
				callbackURL: "/auth/twitter/callback",
				profileFields: ['id', 'displayName', 'photos']
			},
			redis: {
				host: redisURI.hostname,
				port: redisURI.port,
				password: redisPassword
			}
		}
	} 
	else {
		return require('./config.json');
	}
}

module.exports = init();