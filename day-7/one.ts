
import { readInputLines } from '../utils/index.ts';

const RANK: Record<string, number> = { // can't use enum bc enums can not use numbers
	'2' : 0,
	'3' : 1,
	'4' : 2,
	'5' : 3,
	'6' : 4,
	'7' : 5,
	'8' : 6,
	'9' : 7,
	'T' : 8,
	'J' : 9,
	'Q' : 10,
	'K' : 11,
	'A' : 12
};

const sortByRank = (a: string, b: string) => RANK[a] - RANK[b];

const getHandRank = (hand: string[]): number => {
	return 1;

	// get a rank
}

const lines = await readInputLines('./inputTEST.txt');

for (const line of lines) {
	const [values, bid] = line.split(' ');
	const sortedHand = Array.from(values).sort(sortByRank);

	console.log(sortedHand);

	const rank = getHandRank(sortedHand);
}

// store all the hands and its ranks and sort it all

let result = 0;

console.log(`-> answer: ${ result }`); // x
