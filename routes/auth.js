const express = require('express');
var request = require("request");
const router = express.Router();


router.post('/user-info', function (req, res) {
  //res.send(JSON.stringify({ a: 1 }, null, 3));


  let options = { method: 'POST',
  url:  process.env.URL,
  headers: { 'content-type': 'application/json' },
  // body: '{"client_id":"gPcYTwW26XC4uQavEXgp2OHzvHLU4vEv","client_secret":"wnnzWkOl2-MxGT76sdGYWB-ThOr8B2uWJ16TFtnvBPo2f0js02of-IO5O9ZwO0xS","audience":"https://pinterest-clone.auth0.com/api/v2/","grant_type":"client_credentials"}' };
  body: process.env.BODY };
  


request(options, function (error, response, body) {
  if (error) throw new Error(error);

  res.send(body);
  console.log(body);
});

});


module.exports = router;