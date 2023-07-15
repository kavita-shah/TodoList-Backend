const mongoose = require('mongoose')
const ToDo = require('./todo')
const UserSchema = mongoose.Schema({
    name: String,
    age: String,
    pass: String,
    email: String
})


const User = mongoose.model('user', UserSchema)

 module.exports = User


 

