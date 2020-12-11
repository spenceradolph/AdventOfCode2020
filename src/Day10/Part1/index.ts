import { input } from '../input';

export const Day10Part1 = () => {
    let sortedInput = input.sort((a, b) => a - b); // sorting = guarunteed chain
    sortedInput = [0, ...sortedInput]; // 0 is the charging outlet

    let numDiffOne = 0,
        numDiffThree = 1; // our device is always +3

    for (let x = 0; x < sortedInput.length - 1; x++) {
        const diff = sortedInput[x + 1] - sortedInput[x];
        if (diff == 1) numDiffOne++;
        if (diff == 3) numDiffThree++;
    }

    console.log(numDiffOne * numDiffThree);
};
