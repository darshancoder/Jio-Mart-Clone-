const mongoose = require("mongoose");

const SportsToysSchema = mongoose.Schema({
  image: String,
  title: String,
  price: String,
  userID: String,
},{
  versionKey:false
});

const SportsToysModel = mongoose.model("SportsToys", SportsToysSchema);

module.exports = { SportsToysModel };

// ₹








