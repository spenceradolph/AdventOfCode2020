import { input } from '../input';

export const Day4Part1 = () => {
    let numValid = 0;

    for (const passport of input) {
        const { byr, iyr, eyr, hgt, hcl, ecl, pid } = passport;
        if (byr && iyr && eyr && hgt && hcl && ecl && pid) numValid++;
    }

    console.log(numValid);
};
