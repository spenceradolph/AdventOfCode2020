import { input } from '../input';

export const Day6Part2 = () => {
    let totalCount = 0;

    for (const group of input) {
        let letterCounts: any = {}; // Could have type that included each possible letter, but skipped for simplicity

        for (const person of group) {
            for (const letter of person) {
                if (!letterCounts[letter]) letterCounts[letter] = 0;
                letterCounts[letter]++;
            }
        }

        for (const letter in letterCounts) {
            if (Object.prototype.hasOwnProperty.call(letterCounts, letter)) {
                if (letterCounts[letter] == group.length) {
                    totalCount++;
                }
            }
        }
    }

    console.log(totalCount);
};
