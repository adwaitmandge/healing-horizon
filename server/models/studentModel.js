const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    fullName: { type: "String" },
    age: { type: Number },
    email: { type: "String", unique: true },
    contactNumber: { type: "String" },
    region: { type: "String" },
    Institute: { type: "String" },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestaps: true }
);

const Admin = mongoose.model("Admin", studentSchema);

module.exports = Admin;
