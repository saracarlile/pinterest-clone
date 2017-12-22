const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var user = require('../models/User.js');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;


router.post('/add-pin', function (req, res) {  //user info requests a token from auth0, which can then be used to query their API

  let pinName = req.body.name;
  let pinUrl = req.body.url;

  var cookie = req.cookies.authenticated;  // read 'authenticated' cookie, should contain userid
  console.log(cookie);
  if (cookie === undefined)
  {
    res.redirect('/');
    res.send('{"Message": "cookie "authenticated" does not exist}');
    return;
  } 

  let newPin= {
    pinName: pinName,
    pinUrl: pinUrl,
    pinUser: cookie
  }

  console.log(newPin);
  User.findOneAndUpdate({ 'id': cookie }, { $push: { 'pins': newPin } }).exec(function (err, result) {
    res.send('{"message": "pin added!"}');
  });





  


});





module.exports = router;