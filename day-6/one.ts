
import { readInputLines } from '../utils/index.ts';

const NUMBERS_REGEX = /\d+/g;

const lines = await readInputLines('./input.txt');

const times = lines[0].match(NUMBERS_REGEX)!.map(Number);
const dists = lines[1].match(NUMBERS_REGEX)!.map(Number);

const result = [];

for(let i = 0; i < times!.length; i += 1) { // for each race
	let winCount = 0;
	
	for (let holdTime = 1; holdTime < times[i]; holdTime += 1) {
		const distance = holdTime * (times[i] - holdTime);

		if (distance > dists[i]) {
			winCount += 1;
		}
	}

	result.push(winCount);
}

console.log(`-> answer: ${ result.reduce((acc, x) => acc * x, 1) }`); // 3317888
