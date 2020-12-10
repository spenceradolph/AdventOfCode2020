import { input } from '../input';

export const Day9Part1 = () => {
    const preambleLength = 25;

    for (let x = preambleLength; x < input.length; x++) {
        let hasPair = false;
        const currentNumber = input[x];
        const previousSet = input.slice(x - preambleLength, x);

        // double loop is quick and dirty code, could be potentially be optimized to O(n)
        for (let y = 0; y < preambleLength; y++) {
            for (let z = 0; z < preambleLength; z++) {
                if (y == z) continue;
                if (previousSet[y] + previousSet[z] == currentNumber) hasPair = true;
            }
        }

        if (!hasPair) {
            console.log(currentNumber);
            return;
        }
    }

    console.log('No pair of numbers was found...');
};
