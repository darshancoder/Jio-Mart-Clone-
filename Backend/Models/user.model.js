const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    city:String,
    email:String,
    password:String,
    dateOfBirth:Date,
    verified:Boolean,

},{
    versionKey:false
})

const UserModel = mongoose.model("user",userSchema)

module.exports = {UserModel}