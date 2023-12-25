
import { readInputLines } from '../utils/index.ts';

const NUMBERS_REGEX = /\d+/g;

const lines = await readInputLines('./input.txt');

const time = Number(lines[0].match(NUMBERS_REGEX)!.join(''));
const dist = Number(lines[1].match(NUMBERS_REGEX)!.join(''));

// start holdTime
let start = 1;
for (let holdTime = 1; holdTime < time; holdTime += 1) {
	const distance = holdTime * (time - holdTime);

	if (distance > dist) {
		start = holdTime;
		break;

	}
}

// end holdTime
let end = 1;
for (let holdTime = time; time > start; holdTime -= 1) {
	const distance = holdTime * (time - holdTime);

	if (distance > dist) {
		end = holdTime;
		break;

	}
}

console.log(`-> answer: ${ end - start + 1 }`); // 24655068
