const express = require('express');
var request = require("request");
const router = express.Router();


router.post('/user-info', function (req, res) {  //user info requests a token from auth0, which can then be used to query their API

  let id = req.body.Id;

  let options = {
    method: 'POST',
    url: process.env.URL,
    headers: { 'content-type': 'application/json' },
    body: process.env.BODY
  };


  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    //This cookie also expires after 360000 ms from the time it is set.
    res.cookie('name', 'express', { maxAge: 360000 });

    res.send(body);
  });

});

router.get('/use-token', function (req, res) {  // use token from user-info to get Twitter user profile info stored at auth0

  let token = req.query.token;
  let id = req.query.id;

  var options = {
    method: 'GET',
    url: 'https://pinterest-clone.auth0.com/api/v2/users/' + id,
    headers: { authorization: 'Bearer ' + token }
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(JSON.parse(body));
    let parsed = (JSON.parse(body));
    console.log(parsed.name);
    console.log(parsed.picture); 
    console.log(parsed.user_id);
    res.send(body);
  });

});


router.post('/logout', function (req, res) {  // clear custom cookie that indicates user is logged in
  res.clearCookie('name');
   res.send('cookie "name" cleared');
});




module.exports = router;