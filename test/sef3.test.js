const sefinCipher = require('../index.js');

describe('sef3 cipher', () => {
	it('should encode a string correctly', () => {
		const originalText = 'Kitten';
		const encoded = sefinCipher.sef3.encode(originalText);
		const expectedEncodedText = 'LJK.s3,uio.s3,yrt.s3,yrt.s3,ter.s3,nmb';
		expect(encoded).toEqual(expectedEncodedText);
	});

	it('should decode an encoded string correctly', () => {
		const encodedText = 'LJK.s3,uio.s3,yrt.s3,yrt.s3,ter.s3,nmb';
		const decoded = sefinCipher.sef3.decode(encodedText);
		const expectedOriginalText = 'Kitten';
		expect(decoded).toEqual(expectedOriginalText);
	});

	it('should handle special characters in encoding and decoding', () => {
		const specialText = '? & !';
		const encoded = sefinCipher.sef3.encode(specialText);
		const expectedEncodedText = '<?>.s3,ssj.s3,&.s3,ssj.s3,[!]';
		expect(encoded).toEqual(expectedEncodedText);

		const decoded = sefinCipher.sef3.decode(expectedEncodedText);
		expect(decoded).toEqual(specialText);
	});

	it('should handle empty input for encoding and decoding', () => {
		const encoded = sefinCipher.sef3.encode('');
		expect(encoded).toEqual('');

		const decoded = sefinCipher.sef3.decode('');
		expect(decoded).toEqual('');
	});

	it('should handle numbers with spaces in encoding and decoding', () => {
		const text = '1 2 3 4 5 6 7 8 9 0';
		const expected = '1.s3,ssj.s3,2.s3,ssj.s3,3.s3,ssj.s3,4.s3,ssj.s3,5.s3,ssj.s3,6.s3,ssj.s3,7.s3,ssj.s3,8.s3,ssj.s3,9.s3,ssj.s3,0';

		const encoded = sefinCipher.sef3.encode(text);
		expect(encoded).toEqual(expected);

		const decoded = sefinCipher.sef3.decode(expected);
		expect(decoded).toEqual(text);
	});

	it('should handle mixed case in encoding and decoding', () => {
		const mixedCaseText = 'AbCdEfGhIjKlMnOpWrStUvWxYz';
		const encoded = sefinCipher.sef3.encode(mixedCaseText);
		const expectedEncodedText = 'DAS.s3,nbv.s3,CVX.s3,sdf.s3,WER.s3,gfd.s3,FGH.s3,hjg.s3,IUO.s3,khj.s3,LJK.s3,lkl.s3,MBN.s3,nmb.s3,OPI.s3,iop.s3,QWE.s3,tre.s3,ADS.s3,yrt.s3,IUY.s3,bcv.s3,QWE.s3,xcz.s3,UTY.s3,czx';
		expect(encoded).toEqual(expectedEncodedText);

		const decoded = sefinCipher.sef3.decode(expectedEncodedText);
		expect(decoded).toEqual(mixedCaseText);
	});
});