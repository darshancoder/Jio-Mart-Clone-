const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{type:String, required:true},
    city:{type:String},
    email:{type:String, required:true},
    password:{type:String, required:true},
    dateOfBirth:Date,
    age:{type:Number, required:true}

},{
    versionKey:false
})

const UserModel = mongoose.model("user",userSchema)

module.exports = {UserModel}