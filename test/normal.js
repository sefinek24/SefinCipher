const sefinCipher = require('../index.js');

const originalText = 'AbCdEfGhIjKlMnOpQrStUvWxYz';
console.log(`originalText: ${originalText}\n`);

const encodedText = sefinCipher.sef3.encode(originalText);
console.log(`sef3.encode() ${encodedText}\n`);

const decodedText = sefinCipher.sef3.decode(encodedText);
console.log(`sef3.decode() ${decodedText}`);