const express = require('express');
var request = require("request");
const router = express.Router();


router.post('/user-info', function (req, res) {
  //res.send(JSON.stringify({ a: 1 }, null, 3));

  var options = {
    method: 'POST',
    url: 'https://pinterest-clone.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: '{"client_id": ${process.env.CLIENT_ID},"client_secret": ${process.env.CLIENT_SECRET},"audience":"https://pinterest-clone.auth0.com/api/v2/","grant_type":"client_credentials"}'
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
    res.send(body)
  });

});


module.exports = router;