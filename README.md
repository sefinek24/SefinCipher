# 📜 SefinCipher Module Documentation 🚀
SefinCipher is a JavaScript module that provides text encoding and decoding functionality using a custom character mapping.
It allows you to encode and decode text by replacing characters with corresponding values from the mapping.
Below, you'll find information on how to use this module.

## Installation 📦
You can install the SefinCipher module using npm:
```bash
npm install sefin-cipher
```


## Usage 🧑‍💻
Once you've installed the module, you can use it in your JavaScript project as follows:
```js
const sefinCipher = require('sefin-cipher');
```


## Cipher Map 🔑
The cipherMap is a predefined character mapping used for encoding and decoding.
It associates characters with their respective substitutions. For example:

```js
const cipherMap = new Map([
  ['a', 'dsa'],
  ['b', 'nbv'],
  ['c', 'zcx'],
  // ... (other character mappings)
  ['Z', 'ZXC'],
  ['?', '<?>'],
  ['!', '[!]']
]);
```


## Encoding Text 📝
To encode text using the SefinCipher module, you can use the encode function:
```javascript
const encodedText = sefinCipher.sef3.encode("Do you like cats?");
console.log(encodedText); // Output: "SDF.s3,pio.s3,ssj.s3,tuy.s3,pio.s3,yiu.s3,ssj.s3,lkl.s3,uio.s3,lkj.s3,ter.s3,ssj.s3,zcx.s3,dsa.s3,yrt.s3,das.s3,<?>"
```


## Decoding Text 📤
To decode a previously encoded text, use the decode function:
```javascript
const decodedText = sefinCipher.sef3.decode("SDF.s3,pio.s3,ssj.s3,tuy.s3,pio.s3,yiu.s3,ssj.s3,lkl.s3,uio.s3,lkj.s3,ter.s3,ssj.s3,bnm.s3,dsa.s3,tuy.s3,nbv.s3,ter.s3,ssj.s3,zcx.s3,dsa.s3,yrt.s3,das.s3,<?>");
console.log(decodedText); // Output: "Do you like cats?"
```

### Example 🌟
Here's a complete example of encoding and then decoding text using the SefinCipher module:
```javascript
const sefinCipher = require('sefin-cipher');
const textToEncode = "Computer cat";

const encodedText = sefinCipher.sef3.encode(textToEncode);
console.log("Encoded:", encodedText);

const decodedText = sefinCipher.sef3.decode(encodedText);
console.log("Decoded:", decodedText);
```


## License 📜
This module is provided under the MIT License. Feel free to use and modify it according to your needs.

For more information or to report issues, please visit the [GitHub repository](https://github.com/sefinek24/sefin-cipher).