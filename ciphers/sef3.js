const sefinCipher = {
	encode: (text) => {
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

		let encodedText = '';
		for (let i = 0; i < text.length; i++) {
			const char = text[i];
			const cipher = cipherMap.get(char);
			if (cipher !== undefined) {
				encodedText += cipher + '.s3,'; // Dodaj znak rozróżniający zaszyfrowane znaki
			} else {
				// Jeśli znak nie został odnaleziony, dodaj go niezaszyfrowany
				encodedText += char;
			}
		}

		return encodedText;
	},

	decode: (text) => {
		const decipherMap = new Map([
			['ssj', ' '],
			['dsa', 'a'],
			['nbv', 'b'],
			['zcx', 'c'],
			['sdf', 'd'],
			['ter', 'e'],
			['gfd', 'f'],
			['fgh', 'g'],
			['hjg', 'h'],
			['uio', 'i'],
			['khj', 'j'],
			['lkj', 'k'],
			['lkl', 'l'],
			['bnm', 'm'],
			['nmb', 'n'],
			['pio', 'o'],
			['iop', 'p'],
			['qew', 'q'],
			['tre', 'r'],
			['das', 's'],
			['yrt', 't'],
			['yiu', 'u'],
			['bcv', 'v'],
			['ewq', 'w'],
			['xcz', 'x'],
			['tuy', 'y'],
			['czx', 'z'],
			['DAS', 'A'],
			['NBV', 'B'],
			['CVX', 'C'],
			['SDF', 'D'],
			['WER', 'E'],
			['FDG', 'F'],
			['FGH', 'G'],
			['JHG', 'H'],
			['IUO', 'I'],
			['KJN', 'J'],
			['LJK', 'K'],
			['LKL', 'L'],
			['MBN', 'M'],
			['BMN', 'N'],
			['OPI', 'O'],
			['PIO', 'P'],
			['QWE', 'Q'],
			['RET', 'R'],
			['ADS', 'S'],
			['RYT', 'T'],
			['IUY', 'U'],
			['BVC', 'V'],
			['XZC', 'X'],
			['UTY', 'Y'],
			['ZXC', 'Z'],
		]);

		let decodedText = '';
		let currentCipher = '';

		for (let i = 0; i < text.length; i++) {
			const char = text[i];

			if (char === '.' && text[i + 1] === 's' && text[i + 2] === '3' && text[i + 3] === ',') {
				if (decipherMap.has(currentCipher)) {
					decodedText += decipherMap.get(currentCipher);
				} else {
					decodedText += currentCipher;
				}
				currentCipher = '';
				i += 3;
			} else {
				currentCipher += char;
			}
		}

		if (decipherMap.has(currentCipher)) {
			decodedText += decipherMap.get(currentCipher);
		} else {
			decodedText += currentCipher;
		}

		return decodedText;
	},
};

module.exports = sefinCipher;
