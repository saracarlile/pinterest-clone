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
    let token = 'Bearer ' + body.access_token;
    console.log(token);
    console.log('https://pinterest-clone.auth0.com/api/v2/users/' + id);

    let apioptions = {
      method: 'GET',
      url:'https://pinterest-clone.auth0.com/api/v2/users/' + id,
      headers: { authorization: token }
    };

    request(apioptions, function (error, response, body) {
      if (error) throw new Error(error);
      res.send(body);
      console.log(body);
    });


  });

});


module.exports = router;