const mongoose = require("mongoose")

const adminCRUDSchema = mongoose.Schema({
    title:{type:String, required:true},
    price:{type:String, required:true},
    productURL:{type:String, required:true}
}, {
    versionKey:false
})

const AdminCRUDModel = mongoose.model("adminData",adminCRUDSchema)


module.exports = {AdminCRUDModel}