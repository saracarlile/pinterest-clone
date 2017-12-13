const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

/* GET api listing. */
// all routes at api/route name

router.get('/', (req, res) => {
  res.send('api works');
});


module.exports = router;