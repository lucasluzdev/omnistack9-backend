const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    //name: String,
    email: String
    //passwd: String

})

module.exports = mongoose.model('User', UserSchema)