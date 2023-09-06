const cipherMap = new Map([
	[' ', 'ssj'],
	['a', 'dsa'],
	['b', 'nbv'],
	['c', 'zcx'],
	['d', 'sdf'],
	['e', 'ter'],
	['f', 'gfd'],
	['g', 'fgh'],
	['h', 'hjg'],
	['i', 'uio'],
	['j', 'khj'],
	['k', 'lkj'],
	['l', 'lkl'],
	['m', 'bnm'],
	['n', 'nmb'],
	['o', 'pio'],
	['p', 'iop'],
	['q', 'qew'],
	['r', 'tre'],
	['s', 'das'],
	['t', 'yrt'],
	['u', 'yiu'],
	['v', 'bcv'],
	['w', 'ewq'],
	['x', 'xcz'],
	['y', 'tuy'],
	['z', 'czx'],
	['A', 'DAS'],
	['B', 'NBV'],
	['C', 'CVX'],
	['D', 'SDF'],
	['E', 'WER'],
	['F', 'FDG'],
	['G', 'FGH'],
	['H', 'JHG'],
	['I', 'IUO'],
	['J', 'KJN'],
	['K', 'LJK'],
	['L', 'LKL'],
	['M', 'MBN'],
	['N', 'BMN'],
	['O', 'OPI'],
	['P', 'PIO'],
	['Q', 'QWE'],
	['R', 'RET'],
	['S', 'ADS'],
	['T', 'RYT'],
	['U', 'IUY'],
	['V', 'BVC'],
	['W', 'QWE'],
	['X', 'XZC'],
	['Y', 'UTY'],
	['Z', 'ZXC'],
]);


const sefinCipher = {
	encode: (text) => {
		let encodedText = '';
		for (let i = 0; i < text.length; i++) {
			const char = text[i];
			const cipher = cipherMap.get(char);
			if (cipher !== undefined) {
				encodedText += cipher + '.s3,';
			} else {
				encodedText += char;
			}
		}

		return encodedText;
	},

	decode: (text) => {
		const decipherMap = new Map([...cipherMap.entries()].map(([k, v]) => [v, k]));

		let decodedText = '';
		let currentCipher = '';

		for (let i = 0; i < text.length; i++) {
			const char = text[i];

			if (char === '.' && text[i + 1] === 's' && text[i + 2] === '3' && text[i + 3] === ',') {
				decodedText += decipherMap.get(currentCipher) || currentCipher;
				currentCipher = '';
				i += 3;
			} else {
				currentCipher += char;
			}
		}

		decodedText += decipherMap.get(currentCipher) || currentCipher;

		return decodedText;
	},
};

module.exports = sefinCipher;
