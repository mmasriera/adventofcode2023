
import { readInputLines } from '../utils/index.ts';

const GAME_LABEL = 'Game ';

type Color = 'red' | 'blue' | 'green';

const cubes = { red: 12, green: 13, blue: 14 };

const isPossibleGame = (game: string): boolean => {
	for (const round of game.split('; ')) {
		for (const subset of round.split(', ')) {
			const [num, color] = subset.split(' ') as [number, Color];

			if (cubes[color] < Number(num)) {
				return false;
			}
		}
	}

	return true;
};

const lines = await readInputLines('./input.txt');

let result = 0;

for (const line of lines) {
	const [id, game] = line.replace(GAME_LABEL, '').split(': ');

	if (isPossibleGame(game)) {
		result += Number(id);
	};
}

console.log(`-> answer: ${ result }`); // 2528
