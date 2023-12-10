
import { readInputLines } from '../utils/index.ts';

const countMatches = (target: number[], candidates: number[]): number => {
	return target.reduce((acc, curr) => {
		if (candidates.includes(curr)) {
			acc += 1;
		}

		return acc;
	}, 0);
}

const lines = await readInputLines('./input.txt');

let result = 0;

for (const line of lines) {
	const [winning, candidates] = line
		.split(': ')[1]
		.split(' | ')
		.map(numbers => numbers.match(/\d+/g)!.map(Number));

	const matchesCount = countMatches(winning, candidates);	

	if (matchesCount) {
		result += Math.pow(2, matchesCount - 1);
	}
}

console.log(`-> answer: ${ result }`); // 25004
