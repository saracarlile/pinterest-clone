const express = require('express');
const router = express.Router();


router.post('/user-info', function(req, res){
    res.send("ok");
  });


module.exports = router;