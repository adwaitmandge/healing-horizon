const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");
const Location = require("../models/locationModel");
const DeviceDetector = require("node-device-detector");
// const PDFDocument = require("pdfkit");
const detector = new DeviceDetector({
  clientIndexes: true,
  deviceIndexes: true,
  deviceAliasCode: true,
});

const fs = require("fs");
var pdf = require("pdf-creator-node");
// Read HTML Template
var html = fs.readFileSync("index.html", "utf8");
var options = {
  format: "A3",
  orientation: "portrait",
  border: "10mm",
  header: {
    height: "45mm",
    contents:
      '<div style="text-align: center; font-size:2rem;">Questions and Answers</div>',
  },
  footer: {
    height: "28mm",
    contents: {
      first: "Cover page",
      2: "Second page", // Any page number is working. 1-based index
      default:
        '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
      last: "Last Page",
    },
  },
};

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
  const encryptedAlcohol = cryptr.encrypt("1");
  const encryptedInternet = cryptr.encrypt("1");
  const encryptedSmoking = cryptr.encrypt("0");
  const encryptedMarijuana = cryptr.encrypt("0");
  const encryptedHardDrugs = cryptr.encrypt("0");

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
    Alcohol: encryptedAlcohol,
    Internet: encryptedInternet,
    Smoking: encryptedSmoking,
    Marijuana: encryptedMarijuana,
    HardDrugs: encryptedHardDrugs,
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
      Alcohol: cryptr.decrypt(student.Alcohol),
      Internet: cryptr.decrypt(student.Alcohol),
      Marijuana: cryptr.decrypt(student.Marijuana),
      Smoking: student.Smoking,
      HardDrugs: cryptr.decrypt(student.HardDrugs),
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
      `${obj.answer}\n`,
      // `Question: ${obj.question}\nAnswer: ${obj.answer}\n`,
      function (err) {
        if (err) throw err;
        console.log("Saved!");
      }
    );
  });
  res.json(req.body);
  // res.json(userResponse);
});

const storePDF = asyncHandler(async (req, res) => {
  console.log("Inside the storeResponse route");
  console.log(req.body);

  var document = {
    html: html,
    data: {
      survey: req.body,
    },
    path: "../api/output.pdf",
    type: "",
  };

  pdf
    .create(document, options)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });

  console.log("new pdf created");

  const body = {
    filetype: "pdf",
    embed_model: "HF",
    llm_model: "HF",
    ocr: false,
  };
  const result = await fetch("http://127.0.0.1:8000/process", {
    method: "POST",
    body: JSON.stringify(body),
  });
  console.log("After result request");
  const data = await result.json();
  console.log(data);
  res.json(data);
  // res.json(userResponse);
});

const interpret = asyncHandler(async (req, res) => {
  console.log("Inside the storeResponse route");
  console.log(req.body);

  res.json(obj);
});

module.exports = {
  registerUser,
  markLocation,
  storeResponse,
  storePDF,
  interpret,
};
