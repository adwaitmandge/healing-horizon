const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  email: { type: String, required: true },
  email: { type: String, required: true },
});

const Admin = mongoose.Model("User", adminSchema);

module.exports = { Admin };
