var CryptoJS = require("crypto-js");

var key = CryptoJS.lib.WordArray.random(16);
var iv = CryptoJS.lib.WordArray.random(16);
var encryptedText = CryptoJS.AES.encrypt("password", key, {iv : iv});


var strKey = key.toString(CryptoJS.enc.Hex);
var bckKey = CryptoJS.enc.Hex.parse(strKey);
var decryptedText = 
CryptoJS.AES.decrypt(encryptedText.toString(), 
bckKey, {iv : iv} );

console.log(decryptedText.toString(CryptoJS.enc.Utf8));
