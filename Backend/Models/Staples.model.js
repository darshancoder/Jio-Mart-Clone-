const mongoose = require("mongoose");

const StaplesSchema = mongoose.Schema({
  image: String,
  title: String,
  price: String,
  userID: String,
},{
  versionKey:false
});

const StaplesModel = mongoose.model("Staples", StaplesSchema);

module.exports = { StaplesModel };

// ₹
