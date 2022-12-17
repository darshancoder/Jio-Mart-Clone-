require('dotenv').config()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const user2Schema = mongoose.Schema({
    number:{
        type:String,
        requiired:true
    }
})

user2Schema.methods.generateJWT = function (){
    const token = jwt.sign({
        _id:this._id,
        number:this.number
    },process.env.S_KEY,{expiresIn:'1h'})
}

const UserNumModel = mongoose.model("userNum",user2Schema)

module.exports = {UserNumModel}