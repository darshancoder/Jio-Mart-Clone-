const express = require("express")
const adminAccessRouter = express.Router()

adminAccessRouter.get("/",(req,res) => {
    res.send("Welcome to admin Data Pages")


})

module.exports = {adminAccessRouter}