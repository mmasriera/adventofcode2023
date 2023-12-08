
import { readInputLines } from '../utils/index.ts';

const NUMBERS_REGEX = /\d+/g;
const SYMBOL_REGEX = /[^.\d]/;

const hasAdjacent = (lineIdx: number, start: number, end: number): boolean => {
	const prev = lines[lineIdx - 1]?.substring(start, end) || '';
	const curr = lines[lineIdx]?.substring(start, end) || '';
	const next = lines[lineIdx + 1]?.substring(start, end) || '';
	
	return SYMBOL_REGEX.test(prev + curr + next); // check in all surrounding chars
};

const lines = await readInputLines('./inputTEST.txt');
let result = 0;

lines.forEach((line, lineIdx) => {
	line.match(NUMBERS_REGEX)?.forEach(num => {
		// for each number
		const startIdx = line.indexOf(num);
		const endIdx = startIdx + num.length;

		if (hasAdjacent(lineIdx, startIdx - 1, endIdx + 1)) { // +-1 to get diagonals
			result += Number(num);
		}
	});
});

console.log(`-> answer: ${ result }`); // 535294 is too high - 353012 is too low
