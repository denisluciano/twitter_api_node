const axios = require('axios').default;
const endpoints = require('./endpoints');

exports.getBearerToken = function (consumer_key, consumer_secret) {
    // use OAuth 2 for app-only auth (Twitter requires this)
    // get a bearer token using our app's credentials
    
    const buf = Buffer.from(consumer_key + ':' + consumer_secret, 'utf8');
    b64Credentials = buf.toString('base64');
    // console.log(b64Credentials)


    axios({
      method: 'post',
      url: endpoints.API_HOST + 'oauth2/token',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Authorization': 'Basic '+ b64Credentials
      },
      data: 'grant_type=client_credentials'
      
    })
    .then(res => {
      console.log('sucessfull in request')
      console.log(res.data)
    })
    .catch(err => {
      console.log('error in request')
      console.log(err)
    })
  }