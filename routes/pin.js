const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var user = require('../models/User.js');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;


router.post('/add-pin', function (req, res) {  //add pin to user's wall

  let pinName = req.body.name;
  let pinUrl = req.body.url;

  let cookie = req.cookies.authenticated;  // read 'authenticated' cookie, should contain userid

  let idFromCookie = decodeURIComponent(cookie);
  if (cookie === undefined)
  {
    res.redirect('/');
    res.send('{"Message": "cookie "authenticated" does not exist}');
    return;
  } 

  let newPin= {
    pinName: pinName,
    pinUrl: pinUrl,
    pinUser: idFromCookie
  }

  User.findOneAndUpdate({ 'id': idFromCookie }, { $push: { 'pins': newPin } }).exec(function (err, result) {
    res.send('{"message": "pin added!"}');
  });

});

router.post('/delete-pin', function (req, res) {  //delete pin from user's wall

  let pinName = req.body.name;
  let pinUrl = req.body.url;

  let cookie = req.cookies.authenticated;  // read 'authenticated' cookie, should contain userid

  let idFromCookie = decodeURIComponent(cookie);  //decode url characters
  if (cookie === undefined)
  {
    res.redirect('/');
    res.send('{"Message": "cookie "authenticated" does not exist}');
    return;
  } 

  let newPin= {
    pinName: pinName,
    pinUrl: pinUrl,
    pinUser: idFromCookie
  }


  User.update({ 'id': idFromCookie }, { '$pull': { 'pins': { 'pinUrl': req.body.url } } }, { safe: true, multi: true }).exec(function (err, result) {
    res.send('{"message": "pin deleted!"}');
  });

});

router.get('/my-pins', function (req, res) {  // get all user's pins for My Pins view

  let cookie = req.cookies.authenticated;  // read 'authenticated' cookie, should contain userid
  
  let idFromCookie = decodeURIComponent(cookie);  //decode url characters

  if (cookie === undefined) {
    res.redirect('/');
    res.send('{"Message": "cookie "authenticated" does not exist}');
    return;
  }

  User.find({ 'id': idFromCookie }).exec(function (err, collection) { 

    res.send(JSON.stringify(collection));
  });

});



router.get('/all-pins', function (req, res) {  // get all user's pins for My Pins view

  User.find({}).exec(function (err, collection) {  
    res.send(JSON.stringify(collection));
  });

});





module.exports = router;