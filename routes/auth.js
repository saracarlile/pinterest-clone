const express = require('express');
const router = express.Router();


router.get('/user-info', function(req, res){
    res.send("ok");
  });


module.exports = router;