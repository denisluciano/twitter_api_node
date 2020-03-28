const axios = require('axios').default;
const helpers = require('./helpers');

// helpers.getBearerToken(process.env.CONSUMER_KEY,process.env.CONSUMER_SECRET);

var Twitter = function (config) {
  if (!(this instanceof Twitter)) {
    return new Twitter(config);
  }

  var self = this 
  var credentials = {
    consumer_key        : config.consumer_key,
    consumer_secret     : config.consumer_secret,
    // access_token and access_token_secret only required for user auth
    access_token        : config.access_token,
    access_token_secret : config.access_token_secret,
    // flag indicating whether requests should be made with application-only auth
    app_only_auth       : config.app_only_auth,
  }

  this._validateConfigOrThrow(config);
  this.config = config;
  this._twitter_time_minus_local_time_ms = 0;


}

module.exports = Twitter
