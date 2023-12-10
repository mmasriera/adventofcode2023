
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
const scratchcardsCounter: number[] = new Array(lines.length).fill(1);

let result = 0;

lines.forEach((line, i) => {
	const [winning, candidates] = line
		.split(': ')[1]
		.split(' | ')
		.map(numbers => numbers.match(/\d+/g)!.map(Number));

	const matchesCount = countMatches(winning, candidates);
	
	for(let next = 0; next < matchesCount; next += 1) {
		scratchcardsCounter[i + next + 1] += scratchcardsCounter[i];
	}

	result = scratchcardsCounter.reduce((acc, curr) => acc + curr, 0);
});

console.log(`-> answer: ${ result }`); // 14427616
