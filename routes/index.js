var express = require('express');
var router = express.Router();
const twit = require('twit');
const config = require('../config/auth');

/* GET home page. */
var T = new twit({
  consumer_key:         config.twitter.consumer_key,
  consumer_secret:      config.twitter.consumer_secret,
  access_token:         config.twitter.access_token,
  access_token_secret:  config.twitter.access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})


router.get('/:statuses',function (req, res, next) {
  T.post('statuses/update', { status: req.params.statuses }, function(err, data, response) {
    res.send(data)
  })
})

module.exports = router;
