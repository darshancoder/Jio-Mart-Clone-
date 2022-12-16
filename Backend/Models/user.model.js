const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    Fname:{type:String, required:true},
    Lname:{type:String, required:true},
    city:{type:String},
    email:{type:String, required:true},
    gender:{type:String},
    password:{type:String, required:true},
    dateOfBirth:Date,
    age:{type:Number},
},{
    versionKey:false
})

const UserModel = mongoose.model("user",userSchema)

module.exports = {UserModel}