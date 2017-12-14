const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  userid: String,
  profile_img: String,
  pins: [],
  updated_at: { type: Date, default: Date.now },
});

UserSchema.statics.findOrCreate = require("find-or-create");

module.exports = mongoose.model('User', UserSchema);