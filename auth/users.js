const passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/User');

/* GET users listing. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('user', { user: req.user });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

module.exports = router;