
import { readInputLines } from '../utils/index.ts';

type Color = 'red' | 'blue' | 'green';

const getValue = (subset: string): [number, Color] => {
	const [amount, color] = subset.split(' ');

	return [parseInt(amount, 10), color as Color];
}

const cubesSetPower = (game: string): number => {
	const cubes = { red: 0, green: 0, blue: 0 };

	for (const round of game.split('; ')) {
		for (const subset of round.split(', ')) {
			const [amount, color] = getValue(subset);

			if (cubes[color] < amount) {
				cubes[color] = amount;
			}
		}
	}

	return Object.values(cubes).reduce((acc, curr) => acc * curr, 1);
}

const lines = await readInputLines('./input.txt');

let result = 0;

for (const line of lines) {
	const game = line.split(': ')[1];

	result += cubesSetPower(game);
}

console.log(`-> answer: ${ result }`); // 67363