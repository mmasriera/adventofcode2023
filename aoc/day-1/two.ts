
import { readInputLines } from "../utils/index.ts";

const MATCHER: Record<string, { name: string, value: number }> = {
	'on': { name: 'one', value: 1 },
	'tw': { name: 'two', value: 2 },
	'th': { name: 'three', value: 3 },
	'fo': { name: 'four', value: 4 },
	'fi': { name: 'five', value: 5 },
	'si': { name: 'six', value: 6 },
	'se': { name: 'seven', value: 7 },
	'ei': { name: 'eight', value: 8 },
	'ni': { name: 'nine', value: 9 }
};

const getCalibrationValue = (line: string): number => {
	let first = 0;
	let last = 0;

	for (let i = 0; i < line.length; i += 1) {
		const char = line[i];
		let value = Number(char);

		if (isNaN(value)) { // look for the number word
			const match = MATCHER[char + line[i + 1]];			
			// check if the whole number word matches
			if (match && (line.substring(i, i + match.name.length) === match.name)) {
				value = match.value
			}
		}

		if (value) {
			if (!first) {
				first = value;
			}
	
			last = value;
		}
	}

	return (first * 10) + (last || first);
}

const lines = await readInputLines('./input.txt');

let result = 0;

for (const line of lines) {
	result += getCalibrationValue(line);
}

console.log(`-> result: ${ result }`);
