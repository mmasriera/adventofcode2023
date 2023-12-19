
import { readInput } from '../utils/index.ts';

const input = await readInput('./input.txt');
const [seedsLine, ...mappingsLine] = input.split('\n\n');
const seeds = seedsLine.split('seeds: ')[1].split(' ').map(Number);
const seedRanges = [];
for (let i = 0; i < seeds.length; i += 2) {
	seedRanges.push([seeds[i], seeds[i + 1]]);
}
const mappings = mappingsLine.map(line => 
	line.split('\n').slice(1) // split by endlines and remove the 1st one "x to y:"
	.map(numbers => numbers.split(' ').map(Number)) // get the numbers
);

const getLocation = (seed: number): number => {
	let value = seed;
	
	for (const mapping of mappings) {
		for (const [dest, src, range] of mapping) { // iterate over all the mappings to get the dest
			if ((value >= src) && (value <= (src + range))) { // if is in range
				value = dest + (value - src);
				break;
			}
		}
	}

	return value;
}

let result = Math.min(...seedRanges.map(([start, size]) => {
	let min = Number.MAX_SAFE_INTEGER;

	for (let i = start; i < start + size; i += 1) {
		min = Math.min(min, getLocation(i));
	}

	return min;
}));

console.log(`-> answer: ${ result }`); //
