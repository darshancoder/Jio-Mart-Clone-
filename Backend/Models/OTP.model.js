const mongoose = require("mongoose")

const otpSchema = mongoose.Schema({
    number:{type:String, required:true},
    otp:{type:String,required:true},
    createAt:{type:Date,default:Date.now,index:{expired:300}}
},{
    versionKey:false
})

const OtpModel = mongoose.model("otp",otpSchema)

module.exports = {OtpModel}

