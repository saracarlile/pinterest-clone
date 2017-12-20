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
    res.send(body);
  });

});

router.get('/use-token', function (req, res) {

  let token = req.body.token;
  let id = req.body.id;

  var options = {
    method: 'GET',
    url: 'https://pinterest-clone.auth0.com/api/v2/users/' + id,
    headers: { authorization: 'Bearer ' + token }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send(body);
    console.log("test");
    console.log(token);
    console.log(id);
    console.log(body);
  });

});



module.exports = router;