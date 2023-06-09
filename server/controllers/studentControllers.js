const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");
const Location = require("../models/locationModel");
const DeviceDetector = require("node-device-detector");
const detector = new DeviceDetector({
  clientIndexes: true,
  deviceIndexes: true,
  deviceAliasCode: true,
});
const fs = require("fs");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotallySecretKey");
// const encryptedString = cryptr.encrypt('bacon');
// const decryptedString = cryptr.decrypt(encryptedString);

const platform = require("platform");

//@description     Register new user
//@route           POST /api/user/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, age, email, phoneNumber, region, institute } = req.body;
  console.log("Inside the req body");

  const encryptedFullName = cryptr.encrypt(fullName);
  const encryptedAge = cryptr.encrypt(age);
  const encryptedEmail = cryptr.encrypt(email);
  const encryptedPhoneNumber = cryptr.encrypt(phoneNumber);
  const encryptedRegion = cryptr.encrypt(region);
  const encryptedInstitute = cryptr.encrypt(institute);

  console.log(
    "age",
    encryptedAge,
    "email",
    encryptedEmail,
    "fullname",
    encryptedFullName,
    "insti",
    encryptedInstitute,
    "phone",
    encryptedPhoneNumber,
    "region",
    encryptedRegion
  );

  const studentExists = await Student.findOne({ encryptedEmail });

  if (studentExists) {
    const { surveyCount } = studentExists;
    surveyCount += 1;
    await studentExists.save();
    return;
  }

  const student = await Student.create({
    fullName: encryptedFullName,
    age: encryptedAge,
    email: encryptedEmail,
    phoneNumber: encryptedPhoneNumber,
    region: encryptedRegion,
    institute: encryptedInstitute,
    surveyCount: 1,
  });

  if (student) {
    res.status(201).json({
      _id: student._id,
      fullName: cryptr.decrypt(student.fullName),
      age: cryptr.decrypt(student.age),
      email: cryptr.decrypt(student.email),
      phoneNumber: cryptr.decrypt(student.phoneNumber),
      region: cryptr.decrypt(student.region),
      institute: cryptr.decrypt(student.institute),
      isAdmin: student.isAdmin,
      surveyCount: student.surveyCount,
      // _id: student._id,
      // fullName: student.encryptedFullName,
      // age: student.encryptedAge,
      // email: student.encryptedEmail,
      // phoneNumber: student.encryptedPhoneNumber,
      // region: student.encryptedRegion,
      // institute: student.encryptedInstitute,
      // isAdmin: student.isAdmin,
      // surveyCount: student.surveyCount,
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

const storeResponse = asyncHandler(async (req, res) => {
  console.log("Inside the storeResponse route");
  console.log(req.body);

  console.log("About to write a new file");
  fs.writeFile(
    "/coding/Adwait/qna.txt",
    "Questions and Answers!\n",
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }
  );

  console.log("About to store the responses");
  req.body.map((obj) => {
    fs.appendFile(
      "/coding/Adwait/qna.txt",
      `Question: ${obj.question}\nAnswer: ${obj.answer}\n`,
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  });
  res.json(req.body);
  // res.json(userResponse);
});

module.exports = { registerUser, markLocation, storeResponse };
