

import { readInput } from "../utils/index.ts";

const getCalibrationValue = (line: string): number => {
	const numbers = Array.from(line).map(Number).filter(n => !isNaN(n));

	const first= numbers.shift() || 0;
	const last = numbers.pop() || first || 0;

	return (first * 10) + last;
}

const text = await readInput('input.txt');
const lines = text.split('\n');

let result = 0;

for (const line of lines) {
	result += getCalibrationValue(line);
}

console.log(`result: ${ result }`);
// solution 54940
