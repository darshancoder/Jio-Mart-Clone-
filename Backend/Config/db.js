const mongoose = require("mongoose")
require("dotenv").config()

const connect = () => {
    return mongoose.connect(process.env.mongoDB_URL)
}

module.exports = {connect}