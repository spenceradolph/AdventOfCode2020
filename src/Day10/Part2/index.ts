import { input } from '../input';

export const Day10Part2 = () => {
    let sortedInput = input.sort((a, b) => a - b); // sorting = guarunteed chain
    sortedInput = [0, ...sortedInput]; // 0 is the charging outlet

    let arrayOfDiffs = [];
    for (let x = 0; x < sortedInput.length - 1; x++) arrayOfDiffs.push(sortedInput[x + 1] - sortedInput[x]);

    let currentStreak = 0;
    let numWays = 1;
    for (let x = 0; x < arrayOfDiffs.length; x++) {
        if (arrayOfDiffs[x] == 1) {
            currentStreak++;
            continue;
        }

        switch (currentStreak) {
            case 4: // known max from data analysis
                numWays = numWays * 7; // options for which numbers to exclude -> [n/a, 1, 2, 3, 1&2, 1&3, 2&3]
                break;
            case 3:
                numWays = numWays * 4; // -> [n/a, 1, 2, 1&2]
                break;
            case 2:
                numWays = numWays * 2; // -> [n/a, 1]
                break;
            default:
                break;
        }

        currentStreak = 0;
    }

    console.log(numWays);
};
