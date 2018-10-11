const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  _id: String,
  id: String,
  username: String,
  password: String
});

module.exports = mongoose.model('tas', UserSchema);
