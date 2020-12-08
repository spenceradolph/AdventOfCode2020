import { input, TREE } from '../input';

export const Day3Part1 = () => {
    const lengthOfLine = input[0].length;

    let currentX = 0;
    const slopeRight = 3;

    let numTreeHits = 0;

    for (let lineNumber = 1; lineNumber < input.length; lineNumber++) {
        currentX = (currentX + slopeRight) % lengthOfLine;

        if (input[lineNumber][currentX] == TREE) numTreeHits++;
    }

    console.log(numTreeHits);
};
