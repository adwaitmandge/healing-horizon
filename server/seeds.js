const Cryptr = require("cryptr");
const cryptr = new Cryptr("myTotallySecretKey");

// const encryptedString = cryptr.encrypt('bacon');
// const decryptedString = cryptr.decrypt(encryptedString)

// console.log(encryptedString);
// console.log(decryptedString);

const Student = require("./models/studentModel");
const { default: mongoose } = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/healingHorizon")
  .then(() => {
    console.log("Connected to MONGODB successfully");
  })
  .catch((err) => {
    console.log("Couldn't connect to db");
    console.log(err);
  });
const Location = require("./models/locationModel");

// const fs = require("fs");

// fs.writeFile("/tmp/test", "Hey there!\nHi", function (err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("The file was saved!");
// });

// const insertLocation = async () => {
//   const newLocation = await Location.create({
//     lat: 8.50357,
//     lng: 76.94742,
//   });
//   console.log("Created New Location");
// };

// insertLocation();

const updateData = async () => {
  const user = await Student.findOne({ _id: "6484a8ad95b2357860c58ce1" });
  user.HardDrugs = cryptr.encrypt("1");
  user.Alcohol = cryptr.encrypt("0");
  user.Internet = cryptr.encrypt("0");
  await user.save();
};

updateData();
