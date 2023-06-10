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
      type: Boolean,
      default: false,
    },
    Smoking: {
      type: Boolean,
      default: false,
    },
    Marijuana: {
      type: Boolean,
      default: false,
    },
    HardDrugs: {
      type: Boolean,
      default: false,
    },
    Internet: {
      type: Boolean,
      default: false,
    },
  },
  { timestaps: true }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
