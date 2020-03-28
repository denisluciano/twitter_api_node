// Place that's usage my library twitter
var Twitter = require('./src/twitter');

require('dotenv').config();

var T = new Twitter({
    consumer_key:         process.env.CONSUMER_KEY,
    consumer_secret:      process.env.CONSUMER_SECRET,
    access_token:         process.env.ACESS_TOKEN,
    access_token_secret:  process.env.ACESS_TOKEN_SECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })

