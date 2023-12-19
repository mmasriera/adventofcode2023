
import { readInputLines } from '../utils/index.ts';

type Range = {
	src: number;
	dest: number;
	range: number;
};

/*
	this will be used to memoize the results so there's no neeed to compute the seed2location
	for previously calculated seeds
*/
// const seed2locationMap: Record<number, number> = {};

const maps: Record<string, Range[]> = {
	'seed-to-soil map:': [],
	'soil-to-fertilizer map:': [],
	'fertilizer-to-water map:': [],
	'water-to-light map:': [],
	'light-to-temperature map:': [],
	'temperature-to-humidity map:': [],
	'humidity-to-location map:': []
};

const getSeedRanges = (seedsLine: string) => {
	const ranges = [];
	const numbers = seedsLine.split('seeds: ')[1].split(' ').map(Number);

	for (let i = 0; i < numbers.length; i += 2) {
		ranges.push([numbers[i], numbers[i + 1]]);
	}

	return ranges;
}

const getDestination = (key: string, source: number): number => {
	for (let i = 0; i < maps[key].length; i += 1) {
		const { src, dest, range } = maps[key][i];

		if ((source >= src) && (source <= (src + range))) { // if is in range
			return dest + (source - src);
		}
	}

	return source;
}

const getSeedLocation = (seed: number): number => {	
	const soil = getDestination('seed-to-soil map:', seed);
	const fertilizer = getDestination('soil-to-fertilizer map:', soil);
	const water = getDestination('fertilizer-to-water map:', fertilizer);
	const light = getDestination('water-to-light map:', water);
	const temperature = getDestination('light-to-temperature map:', light);
	const humidity = getDestination('temperature-to-humidity map:', temperature);
	const location = getDestination('humidity-to-location map:', humidity);

	return location;
}

const lines = await readInputLines('./input.txt');
const seedRanges = getSeedRanges(lines[0]);

// init map
const NUMBERS_REGEX = /\d+/g;
let currentMap;
for (let i = 1; i < lines.length; i += 1) {
	if (maps[lines[i]]) {
		currentMap = maps[lines[i]];
	} else {
		const [dest, src, range] = (lines[i].match(NUMBERS_REGEX) || []).map(Number);
		
		if (dest || src || range) {
			currentMap!.push({ dest, src, range });
		}
	}
}

/*
	using the momization approach it is better to do it iterating rather than using
	a map (bc it will parallelize) (???is it really like this???)
*/
let result = Number.MAX_SAFE_INTEGER;

seedRanges.map(([start, amount]) => {
	console.log([start, amount]);
	
	// for (let i = start; i < (start + amount); i += 1) {
	// 	// console.log(i);
		
	// 	// if (!seed2locationMap[i]) {
	// 	// 	seed2locationMap[i] = getSeedLocation(i);
	// 	// }

	// 	result = Math.min(result, getSeedLocation(i));
	// }
});

console.log(maps);

console.log(`-> answer: ${ result }`);
