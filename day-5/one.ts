
import { readInput } from '../utils/index.ts';

const input = await readInput('./input.txt');
const [seedsLine, ...mappingsLine] = input.split('\n\n');
const seeds = seedsLine.split('seeds: ')[1].split(' ').map(Number);
const mappings = mappingsLine.map(line => 
	line.split('\n').slice(1) // split by endlines and remove the 1st one "x to y:"
	.map(numbers => numbers.split(' ').map(Number)) // get the numbers
);

const getLocation = (seed: number): number => {
	let value = seed;
	
	for (const mapping of mappings) {
		for (const [dest, src, range] of mapping) { // iterate over all the mappings to get the dest
			console.log(dest, src, range);
			
			if ((value >= src) && (value <= (src + range))) { // if is in range
				value = dest + (value - src);
				break;
			}
		}
	}

	return value;
}

const result = Math.min(...seeds.map(getLocation));

console.log(`-> answer: ${ result }`); // 389056265
