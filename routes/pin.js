const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var user = require('../models/User.js');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;


router.post('/add-pin', function (req, res) {  //user info requests a token from auth0, which can then be used to query their API

  let id = req.body.id;
  res.send('{"response": "ok"}');

  


});





module.exports = router;