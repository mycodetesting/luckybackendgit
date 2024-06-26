const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const placeSchema = new Schema({
  userProfileUrl: { type: String, required: true },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

module.exports = mongoose.model("Place", placeSchema);
