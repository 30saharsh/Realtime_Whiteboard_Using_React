var mongoose = require('mongoose');

var plm = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Map_App_Database");


var userSchema = mongoose.Schema({
  username:String,
  password: String
})



module.exports = mongoose.model('users'  , userSchema);