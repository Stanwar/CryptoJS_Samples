var CryptoJS = require("crypto-js");

// Generating salt to be added to our passphrase to generate a key
var passPhrase = "password";
var salt = CryptoJS.lib.WordArray.random(128/8);
// Stronger Key 
var key128 = CryptoJS.PBKDF2(passPhrase, salt, { keySize : 128/32 });

var key256 = CryptoJS.PBKDF2(passPhrase, salt, { KeySize : 256/32 });

var key512 = CryptoJS.PBKDF2(passPhrase, salt, { KeySize : 512/32 });
