

import { readInput } from "../utils/index.ts";

const getCalibrationValue = (line: string): number => {
	const numbers = Array.from(line).filter(char => !isNaN(char));	

	const firstValue = numbers.shift() || '0';
	const lastValue = numbers.pop() || firstValue || '0';

	return Number(firstValue + lastValue);
}

const text = await readInput('input.txt');
const lines = text.split('\n');

let result = 0;

for (const line of lines) {
	result += getCalibrationValue(line);
}

console.log(`result: ${ result }`);
// solution 54940
