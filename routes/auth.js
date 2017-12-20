const express = require('express');
var request = require("request");
const router = express.Router();


router.post('/user-info', function (req, res) {

  let options = { method: 'POST',
  url:  process.env.URL,
  headers: { 'content-type': 'application/json' },
  body: process.env.BODY };
  


request(options, function (error, response, body) {
  if (error) throw new Error(error);

  res.send(body);
  console.log(body.access_token);
});

});


module.exports = router;