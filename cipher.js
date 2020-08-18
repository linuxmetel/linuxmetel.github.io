var cipher_aes = function(word) { 
var CryptoJS = require('crypto-js');
CryptoJS.AES.decrypt(word, (location.search).substr( 5 )).toString(CryptoJS.enc.Utf8);
}
