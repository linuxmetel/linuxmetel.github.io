var cipher_aes = function(word) { 
CryptoJS.AES.decrypt(word, (location.search).substr( 5 )).toString(CryptoJS.enc.Utf8);
}
