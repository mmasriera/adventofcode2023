
import { readInputLines } from '../utils/index.ts';

const RANK = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const lines = await readInputLines('./input.txt');

for (const line of lines) {
	const [hand, bid] = line.split(' ');

	console.log(hand);
}

let result = 0;

console.log(`-> answer: ${ result }`); // x
