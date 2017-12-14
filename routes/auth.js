const express = require('express');
const router = express.Router();
const passportTwitter = require('../auth/twitter');

/* LOGOUT ROUTER */
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });


/* TWITTER ROUTER */
router.get('/twitter',
passportTwitter.authenticate('twitter'));

router.get('/twitter/callback',
passportTwitter.authenticate('twitter', { failureRedirect: '/login' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});


module.exports = router;