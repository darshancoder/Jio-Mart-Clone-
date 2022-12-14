const mongoose = require("mongoose");

const menSchema = mongoose.Schema({
  image: String,
  title: String,
  price: String,
  userID: String,
},{
  versionKey:false
});

const menModel = mongoose.model("men", menSchema);

module.exports = { menModel };

// ₹

