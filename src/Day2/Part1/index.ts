import { input } from '../input';

export const Day2Part1 = () => {
    let numValid = 0;

    for (const policy of input) {
        const { password, letter, min, max } = policy;

        let letterCount = 0;
        for (const character of password) {
            if (character == letter) letterCount++;
        }

        if (min <= letterCount && letterCount <= max) numValid++;
    }

    console.log(numValid);
};
