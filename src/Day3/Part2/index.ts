import { input, TREE } from '../input';

export const Day3Part2 = () => {
    const lengthOfLine = input[0].length;

    // Right 1, Down 1 // TODO: make this a function call to simplify
    let numTreeHits1 = 0;
    let slopeRight = 1;
    let slopeDown = 1;
    let currentX = 0;
    for (let lineNumber = slopeDown; lineNumber < input.length; lineNumber += slopeDown) {
        currentX = (currentX + slopeRight) % lengthOfLine;
        if (input[lineNumber][currentX] == TREE) numTreeHits1++;
    }

    // Right 3, Down 1
    let numTreeHits2 = 0;
    slopeRight = 3;
    slopeDown = 1;
    currentX = 0;
    for (let lineNumber = slopeDown; lineNumber < input.length; lineNumber += slopeDown) {
        currentX = (currentX + slopeRight) % lengthOfLine;
        if (input[lineNumber][currentX] == TREE) numTreeHits2++;
    }

    // Right 5, Down 1
    let numTreeHits3 = 0;
    slopeRight = 5;
    slopeDown = 1;
    currentX = 0;
    for (let lineNumber = slopeDown; lineNumber < input.length; lineNumber += slopeDown) {
        currentX = (currentX + slopeRight) % lengthOfLine;
        if (input[lineNumber][currentX] == TREE) numTreeHits3++;
    }

    // Right 7, Down 1
    let numTreeHits4 = 0;
    slopeRight = 7;
    slopeDown = 1;
    currentX = 0;
    for (let lineNumber = slopeDown; lineNumber < input.length; lineNumber += slopeDown) {
        currentX = (currentX + slopeRight) % lengthOfLine;
        if (input[lineNumber][currentX] == TREE) numTreeHits4++;
    }

    // Right 1, Down 2
    let numTreeHits5 = 0;
    slopeRight = 1;
    slopeDown = 2;
    currentX = 0;
    for (let lineNumber = slopeDown; lineNumber < input.length; lineNumber += slopeDown) {
        currentX = (currentX + slopeRight) % lengthOfLine;
        if (input[lineNumber][currentX] == TREE) numTreeHits5++;
    }

    console.log(numTreeHits1 * numTreeHits2 * numTreeHits3 * numTreeHits4 * numTreeHits5);
};
