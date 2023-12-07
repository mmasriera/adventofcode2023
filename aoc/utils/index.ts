
const LINE_BREAK = '\n';

export const readInput = async (inputFile: string): Promise<string> => {
	const input = await Deno.readTextFile(inputFile);

	return input;
};

export const readInputLines = async (inputfile: string): Promise<string[]> => {
	const text = await readInput(inputfile);

	return text.split(LINE_BREAK);
};
