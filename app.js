var basic = require('./samples/basic');
var CryptoJS = require("crypto-js");

var cipherText = CryptoJS.AES.encrypt('password', 'key123');
console.log(cipherText.ciphertext);
basic();
