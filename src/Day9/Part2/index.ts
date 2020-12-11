import { input } from '../input';

export const Day9Part2 = () => {
    const invalidNumber = 57195069; // from Part 1
    let firstPos = 0,
        secondPos = 1;

    while (firstPos != secondPos) {
        let sum = input.slice(firstPos, secondPos + 1).reduce((a, b) => a + b);

        if (sum == invalidNumber) {
            const subArray = input.slice(firstPos, secondPos + 1).sort((a, b) => a - b); // sorted sub array to easily find min/max
            console.log(subArray[0] + subArray[subArray.length - 1]);
            return;
        } else if (sum < invalidNumber) {
            secondPos++;
        } else {
            firstPos++;
        }
    }
};
