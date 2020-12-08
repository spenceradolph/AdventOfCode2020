import { input } from '../input';

export const Day2Part2 = () => {
    let numValid = 0;

    for (const policy of input) {
        const { password, letter } = policy;
        const index1 = policy.min - 1;
        const index2 = policy.max - 1;

        if (
            (password[index1] == letter && password[index2] != letter) ||
            (password[index2] == letter && password[index1] != letter)
        ) {
            numValid++;
        }
    }

    console.log(numValid);
};
