const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  id: String,
  picture: String,
  pins: []
});


module.exports = mongoose.model('User', UserSchema);