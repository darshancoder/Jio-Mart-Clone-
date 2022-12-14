const mongoose = require("mongoose")

const otpSchema = mongoose.Schema({
    number:Number
})

const OtpModel = mongoose.model("monumber",otpSchema)

module.exports = {OtpModel}

