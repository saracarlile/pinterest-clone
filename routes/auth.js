const express = require('express');
const router = express.Router();


router.post('/user-info', function(req, res){
    res.send(JSON.stringify({ a: 1 }, null, 3));
  });


module.exports = router;