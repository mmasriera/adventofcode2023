
import { readInputLines } from '../utils/index.ts';

const REGEX = /^(\d|one|two|three|four|five|six|seven|eight|nine)/;
const NUMBERS: Record<string, number> = {
	one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9
};

const getCalibrationValue = (line: string): number => {
	let first = 0;
	let last = 0;

	while (line.length) {
		const match = line.match(REGEX)?.[0];

		if (match) {
			last = NUMBERS[match] || parseInt(match, 10);

			if (!first) {
				first = last;
			}
		}

		line = line.substring(1);
	}

	return (first * 10) + (last || first);
}

const lines = await readInputLines('./input.txt');

let result = 0;

for (const line of lines) {
	result += getCalibrationValue(line);
}

console.log(`-> answer: ${ result }`);
// solution 54208
