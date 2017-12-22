const express = require('express');
var request = require("request");
const router = express.Router();
var mongoose = require('mongoose');
var user = require('../models/User.js');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;


router.post('/user-info', function (req, res) {  //user info requests a token from auth0, which can then be used to query their API

  let id = req.body.id;

  let options = {
    method: 'POST',
    url: process.env.URL,
    headers: { 'content-type': 'application/json' },
    body: process.env.BODY
  };


  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    //This cookie also expires after 3600000000 ms from the time it is set.
    // cookie 'authenticated': 'yes' means user logged in, can now be checked at api end points
    res.cookie('authenticated', id, { maxAge: 3600000000 });  

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



  User.findOne({ 'id': parsed.user_id }).exec(function (err, user) {
    if (!user) { // if no user found ... user reated upon login
      let person = new User({
        name: parsed.name,
        id: parsed.user_id,
        picture: parsed.picture
      });
      person.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('saved');
        }
      });
    }
    if (user) {
      console.log(user);
    }
  });

    res.send(body);
  });

});


router.post('/logout', function (req, res) {  // clear custom cookie that indicates user is logged in

  var cookie = req.cookies.authenticated;  // read 'authenticated' cookie
  console.log(cookie);
  if (cookie === undefined)
  {
    res.redirect('/');
    res.send('cookie "authenticated" does not exist');
  } 

   res.clearCookie('authenticated');
   res.send('{"cookie": "cleared"}');
});




module.exports = router;