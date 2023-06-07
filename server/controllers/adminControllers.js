const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const Student = require("../models/studentModel");
const Location = require("../models/locationModel");
const generateToken = require("../config/generateToken");

//@description     Register new user
//@route           POST /api/user/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log("Inside the req body");
  if (!email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const adminExists = await Admin.findOne({ email });

  if (adminExists) {
    res.status(400);
    throw new Error("Admin already exists");
  }

  const admin = await Admin.create({
    email,
    password,
  });

  if (admin) {
    res.status(201).json({
      _id: admin._id,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error("Admin not found");
  }
});

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  console.log("Inside the authUser");
  const { email, password } = req.body;
  console.log("About to search for the user");
  const user = await Admin.findOne({ email });
  console.log(user);
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

const getStudents = asyncHandler(async (req, res) => {
  console.log("Inside the getStudents");
  console.log("About to search students");
  const students = await Student.find();
  console.log(students);
  res.json(students);
});

const getCoordinates = asyncHandler(async (req, res) => {
  console.log("Inside the getCoordinates");
  console.log("About to search coordinates");
  const coordinates = await Location.find();
  console.log(coordinates);
  res.json(coordinates);
});

module.exports = { registerUser, authUser, getStudents, getCoordinates };
