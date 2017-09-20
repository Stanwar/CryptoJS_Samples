var CryptoJS = require("crypto-js");

var ciText = CryptoJS.AES.encrypt('password', 'key123');

console.log(ciText.ciphertext);


var bytes = CryptoJS.AES.decrypt(ciText.toString(), 'key123');
var plainText = bytes.toString(CryptoJS.enc.Utf8);

console.log(plainText);