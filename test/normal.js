const sefinCipher = require('../index.js');

const originalText = 'Computer cat';
const encodedText = sefinCipher.sef3.encode(originalText);
console.log('encode', encodedText);

const decodedText = sefinCipher.sef3.decode(encodedText);
console.log('decode', decodedText);