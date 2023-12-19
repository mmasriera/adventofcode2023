
import { readInputLines } from '../utils/index.ts';

const NUMBERS_REGEX = /\d+/g;
const SYMBOL_REGEX = /[^.\d]/;

const hasAdjacent = (lineIdx: number, start: number, end: number): boolean => {
	const prev = lines[lineIdx - 1]?.substring(start, end) || '';
	const curr = lines[lineIdx].substring(start, end) || '';
	const next = lines[lineIdx + 1]?.substring(start, end) || '';
	
	return SYMBOL_REGEX.test(prev + curr + next); // check in all surrounding chars
};

const lines = await readInputLines('./inputTEST.txt');
let result = 0;

// for (let i = 0; i < lines.length; i += 1) {
// 	console.log('=>', lines[i]);

// 	const numbers = lines[i].replace(/\./g, " ");

//     for (const match of numbers.matchAll(/\d+/g)) {
// }

lines.forEach((line, lineIdx) => {
	const lineSpaced = line.replace(/\./g, ' ');
	
	Array.from(lineSpaced.matchAll(NUMBERS_REGEX)).forEach(match => {
		// const result = match[0]
		// console.log(match[0], match.index);
		console.log(match[0], match.index);
		
		
	});

// 	line.match(NUMBERS_REGEX)?.forEach(num => {
// 		// for each number
// 		const startIdx = line.indexOf(num);
// 		const endIdx = startIdx + num.length;

// 		if (hasAdjacent(lineIdx, startIdx - 1, endIdx + 1)) { // +-1 to get diagonals
// 			result += Number(num);
// 		}
// 	});
});

console.log(`-> answer: ${ result }`); // 535294
