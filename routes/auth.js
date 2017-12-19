const express = require('express');
var request = require("request");
const router = express.Router();

var options = { method: 'POST',
url: 'https://pinterest-clone.auth0.com/oauth/token',
headers: { 'content-type': 'application/json' },
body: 
 { grant_type: 'client_credentials',
   client_id: CLIENT_ID,
   client_secret: CLIENT_SECRET,
   audience: 'https://pinterest-clone.auth0.com/api/v2/' },
json: true };


router.post('/user-info', function(req, res){
    //res.send(JSON.stringify({ a: 1 }, null, 3));

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      console.log(body);
      res.send(JSON.stringify(body));
    });
  });


module.exports = router;