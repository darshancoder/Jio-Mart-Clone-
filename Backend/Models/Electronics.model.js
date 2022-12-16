const mongoose = require("mongoose");

const ElectronicsSchema = mongoose.Schema({
  image: String,
  title: String,
  price: String,
  userID: String,
},{
  versionKey:false
});

const ElectronicsModel = mongoose.model("Electronics", ElectronicsSchema);

module.exports = { ElectronicsModel };

// ₹

