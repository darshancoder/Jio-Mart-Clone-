const bcrypt = require("bcrypt")
const _ =  require("lodash")
// const axios = require("axios")
const otpGenerator = require('otp-generator')


const {UserNumModel}= require("../Models/user2.model")
const {OtpModel}= require("../Models/OTP.model")





module.exports.signUpNum = async(req,res) => {
    const user = await UserNumModel.findOne({
        number:req.body.number
    })

    if(user) return res.status(400).send(
        {"msg":"User already registered!",
        "isRegisterd":true

        })

    const OTP = otpGenerator.generate(4,{
        digits:true, lowerCaseAlphabets:false, upperCaseAlphabets:false,specialChars:false
    })
    const number =req.body.number
    console.log(OTP) 

    const otp = new OtpModel({number:number, otp:OTP})
    const salt = await bcrypt.genSalt(10)
    otp.otp = await bcrypt.hash(otp.otp,salt)
    const result = await otp.save()
    return res.status(200).send({"otp":OTP})

}

module.exports.verifyOtp = async(req,res) => {
    const otpHolder = await OtpModel.find({
        number:req.body.number
    })
    if(otpHolder.length === 0) return res.status(400).send({"msg":"You use an Expired OTP!"})
    const rightOtpFind = otpHolder[otpHolder.length -1]
    const validUser = await bcrypt.compare(req.body.otp, rightOtpFind.otp)

    if(rightOtpFind.number === req.body.number && validUser){
        const user = new UserNumModel(_.pick(req.body, ["number"]))
        const token = user.generateJWT()
        const result = await user.save()
        const OTPDelete = await OtpModel.deleteMany({
            number:rightOtpFind.number
        })
        return res.status(200).send({
            msg:"user Registration Successully",
            token:token,
            data:result
        })
    }else{
        return res.send({"msg":"Your OTP is Wrong "})
    }

}