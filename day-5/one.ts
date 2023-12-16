
import { readInputLines } from '../utils/index.ts';
type Range = {
	src: number;
	dest: number;
	range: number;
};

const maps: Record<string, Range[]> = {
	'seed-to-soil map:': [],
	'soil-to-fertilizer map:': [],
	'fertilizer-to-water map:': [],
	'water-to-light map:': [],
	'light-to-temperature map:': [],
	'temperature-to-humidity map:': [],
	'humidity-to-location map:': []
};

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
const seeds = lines[0].split('seeds: ')[1].split(' ').map(Number);

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

const result = Math.min(...seeds.map(getSeedLocation));

console.log(`-> answer: ${ result }`); // 389056265
