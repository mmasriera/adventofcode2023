
import { readInputLines } from '../utils/index.ts';

const NUMBERS_REGEX = /\d+/g;
const SYMBOL_REGEX = /[^.\d]/;

const lines = await readInputLines('./input.txt');
let result = 0;

lines.forEach((line: string, i: number) => {	
	Array.from(line.matchAll(NUMBERS_REGEX)).forEach(match => {		
		for (let j = match.index; j < match.index + match[0].length; j += 1) {
			const surrounding = [
				(lines[i - 1] ?? '')[j - 1] ?? '.',
				(lines[i - 1] ?? '')[j] ?? '.',
				(lines[i - 1] ?? '')[j + 1] ?? '.',
				(lines[i] ?? '')[j - 1] ?? '.',
				(lines[i] ?? '')[j] ?? '.',
				(lines[i] ?? '')[j + 1] ?? '.',
				(lines[i + 1] ?? '')[j - 1] ?? '.',
				(lines[i + 1] ?? '')[j] ?? '.',
				(lines[i + 1] ?? '')[j + 1] ?? '.'
			];

			if (surrounding.some(x => SYMBOL_REGEX.test(x))) {
				result += parseInt(match[0]);
				break;
			}
        }
	});
});

console.log(`-> answer: ${ result }`); // 535078
