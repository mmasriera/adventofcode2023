
export const readInput = async (inputFile: string): Promise<string> => {
	const input = await Deno.readTextFile(inputFile);

	return input;
};
