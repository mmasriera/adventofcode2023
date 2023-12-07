

import { readInputLines } from "../utils/index.ts";

const getCalibrationValue = (line: string): number => {
	const numbers = Array.from(line).map(Number).filter(n => !isNaN(n));

	const first= numbers.shift() || 0;
	const last = numbers.pop() || first || 0;

	return (first * 10) + last;
}

const lines = await readInputLines('input.txt');

let result = 0;

for (const line of lines) {
	result += getCalibrationValue(line);
}

console.log(`-> answer: ${ result }`);
// solution 54940
