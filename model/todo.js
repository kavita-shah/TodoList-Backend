 const  mongoose = require('mongoose')
 const todoSchema = mongoose.Schema({
    val:String
 })

 const ToDo=mongoose.model('todos' , todoSchema)
 module.exports = ToDo
 