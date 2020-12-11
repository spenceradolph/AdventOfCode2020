import { input, TREE } from '../input';

const helper = (slopeRight: number, slopeDown: number) => {
    const lengthOfLine = input[0].length;
    let numTreeHits = 0;
    let currentX = 0;
    for (let lineNumber = slopeDown; lineNumber < input.length; lineNumber += slopeDown) {
        currentX = (currentX + slopeRight) % lengthOfLine;
        if (input[lineNumber][currentX] == TREE) numTreeHits++;
    }

    return numTreeHits;
};

export const Day3Part2 = () => {
    let numTreeHits1 = helper(1, 1);
    let numTreeHits2 = helper(3, 1);
    let numTreeHits3 = helper(5, 1);
    let numTreeHits4 = helper(7, 1);
    let numTreeHits5 = helper(1, 2);

    console.log(numTreeHits1 * numTreeHits2 * numTreeHits3 * numTreeHits4 * numTreeHits5);
};
