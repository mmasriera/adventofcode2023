
import { readInputLines } from '../utils/index.ts';

const GAME_LABEL = 'Game ';

type Color = 'red' | 'blue' | 'green';

const getGameCues = (): Record<Color, number> => ({ red: 12, green: 13, blue: 14 });

const isPossibleGame = (game: string): boolean => {
	const cubes = getGameCues();
	const rounds = game.split('; ');

	for (const round of rounds) {
		const subsets = round.split(', ');

		// console.log('ROUND', round);
		// console.log(cubes);
		

		for (const subset of subsets) {
			const [num, color] = subset.split(' ') as [number, Color];

			cubes[color] = cubes[color] - Number(num);

			// console.log(' -', num, color, cubes);

			if (cubes[color] < 0) {
				console.log(' -', num, color, cubes, game.split('; '));

				return false;
			}
		}
	}

	return true;
};

const lines = await readInputLines('./inputTEST.txt');

let result = 0;

for (const line of lines) {
	const [id, game] = line.replace(GAME_LABEL, '').split(': ');

	// console.log(id, isPossibleGame(game), game);

	if (isPossibleGame(game)) {
		result += Number(id);
	};
}

console.log(`-> answer: ${ result }`);
// solution 369