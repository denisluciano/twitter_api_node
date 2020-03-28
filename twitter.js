require('dotenv').config()
const axios = require('axios').default;
const helpers = require('./helpers');

helpers.getBearerToken(process.env.CONSUMER_KEY,process.env.CONSUMER_SECRET);

