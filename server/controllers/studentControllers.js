const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");

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
      token: generateToken(student._id),
    });
  } else {
    res.status(400);
    throw new Error("Admin not found");
  }
});

module.exports = { registerUser };
