const express = require("express")
const {signUpNum,verifyOtp} = require("../Controller/user.controller")


const userNumRouter = express.Router()


userNumRouter.route('/number')
.post(signUpNum)


userNumRouter.route('/number/verify')
.post(verifyOtp)

module.exports  = {userNumRouter}