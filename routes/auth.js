const express = require('express');
var request = require("request");
const router = express.Router();


router.post('/user-info', function (req, res) {
  //res.send(JSON.stringify({ a: 1 }, null, 3));

  const str = '{"client_id":"' + process.env.CLIENT_ID + '","client_secret":"'+ process.env.CLIENT_SECRET +'","audience":"https://pinterest-clone.auth0.com/api/v2/","grant_type":"client_credentials"}';
  console.log(str);

  let options = { method: 'POST',
  url:  process.env.URL,
  headers: { 'content-type': 'application/json' },
  body: str };
  
  


request(options, function (error, response, body) {
  if (error) throw new Error(error);

  res.send(body);
  console.log(body);
});

});


module.exports = router;