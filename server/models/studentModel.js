const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    fullName: { type: "String" },
    age: { type: String },
    email: { type: "String", unique: true },
    phoneNumber: { type: "String" },
    region: { type: "String" },
    institute: { type: "String" },
    surveyCount: {
      type: Number,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    Alcohol: {
      type: String,
      default: "0",
    },
    Smoking: {
      type: String,
      default: "0",
    },
    Marijuana: {
      type: String,
      default: "0",
    },
    HardDrugs: {
      type: String,
      default: "0",
    },
    Internet: {
      type: String,
      default: "0",
    },
  },
  { timestaps: true }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
