const express = require('express');
var request = require("request");
const router = express.Router();


router.post('/user-info', function (req, res) {

  let id = req.body.Id;

  let options = {
    method: 'POST',
    url: process.env.URL,
    headers: { 'content-type': 'application/json' },
    body: process.env.BODY
  };


  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    console.log(body.access_token);
    res.send(body);
  });

});


module.exports = router;