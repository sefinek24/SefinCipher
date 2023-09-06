# 📜 SefinCipher Module Documentation
SefinCipher is a JavaScript module that provides text encoding and decoding functionality using a custom character mapping.
It allows you to encode and decode text by replacing characters with corresponding values from the mapping.
Below, you'll find information on how to use this module.

## 📦 Installation
You can install the SefinCipher module using npm:
```bash
npm install sefin-cipher
```


## 🧑‍💻 Usage
Once you've installed the module, you can use it in your JavaScript project as follows:
```js
const sefinCipher = require('sefin-cipher');
```

## ✨ Available Ciphers
The SefinCipher module currently supports the following ciphers:

| # | Name                     | Usage      | Functions         | Recommended? |
|---|--------------------------|------------|:------------------|:-------------|
| 1 | [SEF3](#sef3-cipher-map) | <>.sef3.<> | encode() decode() | ✅            |



# 📑 SEF3 Cipher <div id="sef3-cipher-map"></div>

## 🔑 Map
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

### 🔡 Example
```
#### Text
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

#### Encoded
LKL.s3,pio.s3,tre.s3,ter.s3,bnm.s3,ssj.s3,uio.s3,iop.s3,das.s3,yiu.s3,bnm.s3,ssj.s3,sdf.s3,pio.s3,lkl.s3,pio.s3,tre.s3,ssj.s3,das.s3,uio.s3,yrt.s3,ssj.s3,dsa.s3,bnm.s3,ter.s3,yrt.s3,,.s3,ssj.s3,zcx.s3
,pio.s3,nmb.s3,das.s3,ter.s3,zcx.s3,yrt.s3,ter.s3,yrt.s3,yiu.s3,tre.s3,ssj.s3,dsa.s3,sdf.s3,uio.s3,iop.s3,uio.s3,das.s3,zcx.s3,uio.s3,nmb.s3,fgh.s3,ssj.s3,ter.s3,lkl.s3,uio.s3,yrt.s3,,.s3,ssj.s3,das.s3,ter.s3,sdf.s
3,ssj.s3,sdf.s3,pio.s3,ssj.s3,ter.s3,uio.s3,yiu.s3,das.s3,bnm.s3,pio.s3,sdf.s3,ssj.s3,yrt.s3,ter.s3,bnm.s3,iop.s3,pio.s3,tre.s3,ssj.s3,uio.s3,nmb.s3,zcx.s3,uio.s3,sdf.s3,uio.s3,sdf.s3,yiu.s3,nmb.s3,yrt.s3,ssj.s3,yi
u.s3,yrt.s3,ssj.s3,lkl.s3,dsa.s3,nbv.s3,pio.s3,tre.s3,ter.s3,ssj.s3,ter.s3,yrt.s3,ssj.s3,sdf.s3,pio.s3,lkl.s3,pio.s3,tre.s3,ter.s3,ssj.s3,bnm.s3,dsa.s3,fgh.s3,nmb.s3,dsa.s3,ssj.s3,dsa.s3,lkl.s3,uio.s3,qew.s3,yiu.s3,dsa.s3,.
```


## 📝 Encoding Text
To encode text using the SefinCipher module, you can use the encode function:
```javascript
const encodedText = sefinCipher.sef3.encode("Do you like cats?");
console.log(encodedText); // Output: "SDF.s3,pio.s3,ssj.s3,tuy.s3,pio.s3,yiu.s3,ssj.s3,lkl.s3,uio.s3,lkj.s3,ter.s3,ssj.s3,zcx.s3,dsa.s3,yrt.s3,das.s3,<?>"
```


## 📤 Decoding Text
To decode a previously encoded text, use the decode function:
```javascript
const decodedText = sefinCipher.sef3.decode("SDF.s3,pio.s3,ssj.s3,tuy.s3,pio.s3,yiu.s3,ssj.s3,lkl.s3,uio.s3,lkj.s3,ter.s3,ssj.s3,bnm.s3,dsa.s3,tuy.s3,nbv.s3,ter.s3,ssj.s3,zcx.s3,dsa.s3,yrt.s3,das.s3,<?>");
console.log(decodedText); // Output: "Do you like cats?"
```

# 🌟 Full Example
Here's a complete example of encoding and then decoding text using the SefinCipher module:
```javascript
const sefinCipher = require('sefin-cipher');
const textToEncode = "Computer cat";

const encodedText = sefinCipher.sef3.encode(textToEncode);
console.log("Encoded:", encodedText);

const decodedText = sefinCipher.sef3.decode(encodedText);
console.log("Decoded:", decodedText);
```



## 📜 License
This module is provided under the MIT License. Feel free to use and modify it according to your needs.

For more information or to report issues, please visit the [GitHub repository](https://github.com/sefinek24/sefin-cipher).