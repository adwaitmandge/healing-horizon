// const Cryptr = require('cryptr');
// const cryptr = new Cryptr('myTotallySecretKey');

// const encryptedString = cryptr.encrypt('bacon');
// const decryptedString = cryptr.decrypt(encryptedString)

// console.log(encryptedString);
// console.log(decryptedString);

const fs = require("fs");

fs.writeFile("/tmp/test", "Hey there!\nHi", function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
