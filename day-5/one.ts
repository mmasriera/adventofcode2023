
import { readInputLines } from '../utils/index.ts';

const lines = await readInputLines('./inputTEST.txt');

const seeds = lines[0].split('seeds: ')[1].split(' ');
const maps: Record<string, unknown> = {
	'seed-to-soil map:': {},
	'soil-to-fertilizer map:': {},
	'fertilizer-to-water map:': {},
	'water-to-light map:': {},
	'light-to-temperature map:': {},
	'temperature-to-humidity map:': {},
	'humidity-to-location map:': {}
};

const NUMBERS_REGEX = /\d+/g;
for (let i = 1; i < lines.length; i += 1) {
	if (maps[lines[i]]) {

		do {
			i += 1;

			const [destStart, srcStart, range] = lines[i].match(NUMBERS_REGEX);


		} while( destStart );
		
	}
}

let result = 0;

console.log(`-> answer: ${ result }`); // x
