const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

const encryptedString = cryptr.encrypt('bacon');
const decryptedString = cryptr.decrypt(encryptedString)

console.log(encryptedString); 
console.log(decryptedString); 