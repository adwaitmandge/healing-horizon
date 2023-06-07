const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");
const Location = require("../models/locationModel");
const DeviceDetector = require("node-device-detector");
const detector = new DeviceDetector({
  clientIndexes: true,
  deviceIndexes: true,
  deviceAliasCode: true,
});
const platform = require("platform");

//@description     Register new user
//@route           POST /api/user/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, age, email, phoneNumber, region, institute } = req.body;
  console.log("Inside the req body");

  const studentExists = await Student.findOne({ email });

  if (studentExists) {
    const { surveyCount } = studentExists;
    surveyCount += 1;
    await studentExists.save();
    return;
  }

  const student = await Student.create({
    fullName,
    age,
    email,
    phoneNumber,
    region,
    institute,
  });

  if (student) {
    res.status(201).json({
      _id: student._id,
      fullName: student.fullName,
      age: student.age,
      email: student.email,
      phoneNumber: student.phoneNumber,
      region: student.region,
      institute: student.institute,
      isAdmin: student.isAdmin,
      surveyCount: student.surveyCount,
    });
  } else {
    res.status(400);
    throw new Error("Admin not found");
  }
});

const markLocation = asyncHandler(async (req, res) => {
  const { lat, lng, userAgent } = req.body;
  console.log("Inside the mark location function");

  const result = detector.detect(userAgent);
  // res.json(platform);
  console.log("result parse", result);

  console.log(result);
  console.log(result.device.type);

  const newLocation = await Location.create({
    lat,
    lng,
    deviceType: result.device.type,
  });
  console.log(newLocation);

  res.json(newLocation);
});

module.exports = { registerUser, markLocation };
