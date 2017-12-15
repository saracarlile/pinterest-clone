const passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/User');

passport.serializeUser(function (user, fn) {
  fn(null, user);
});

passport.deserializeUser(function (id, fn) {
  User.findOne({_id: id.doc._id}, function (err, user) {
    fn(err, user);
  });
});

passport.use(new TwitterStrategy({  //real values have been removed
    consumerKey: "Whh4Nr",
    consumerSecret: "sDzym4UF",
    callbackURL: "https://s"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({name: profile.displayName}, {name: profile.displayName,userid: profile.id}, function(err, user) {
      if (err) {
        console.log(err);
        return done(err);
      }
      console.log(user);
      done(null, user);
    });
  }
));

module.exports = passport;