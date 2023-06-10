const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const locationSchema = mongoose.Schema(
  {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    deviceType: { type: "String" },
  },
  { timestaps: true }
);

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
