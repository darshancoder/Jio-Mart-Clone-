const mongoose = require("mongoose");

const AutoCareSchema = mongoose.Schema({
  image: String,
  title: String,
  price: String,
  userID: String,
},{
  versionKey:false
});

const AutoCareModel = mongoose.model("AutoCare", AutoCareSchema);

module.exports = { AutoCareModel };

// ₹



