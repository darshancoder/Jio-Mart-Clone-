const mongoose = require("mongoose");

const DairySchema = mongoose.Schema({
  image: String,
  title: String,
  price: String,
  userID: String,
},{
  versionKey:false
});

const DairyModel = mongoose.model("Dairy", DairySchema);

module.exports = { DairyModel };

// ₹
