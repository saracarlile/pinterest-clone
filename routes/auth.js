const express = require('express');
const router = express.Router();


router.post('/user-info', function(req, res){
    consolelog('hit user-info');
    res.send("ok");
  });


module.exports = router;