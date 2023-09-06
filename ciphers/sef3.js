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
	['?', '<?>'],
	['!', '[!]'],
]);

const sefinCipher = {
	encode: (text) => {
		return text
			.split('')
			.map((char) => cipherMap.get(char) || char)
			.join('.s3,');
	},

	decode: (text) => {
		const decipherMap = new Map([...cipherMap.entries()].map(([k, v]) => [v, k]));

		return text
			.split('.s3,')
			.map((cipher) => decipherMap.get(cipher) || cipher)
			.join('');
	},
};

module.exports = sefinCipher;
