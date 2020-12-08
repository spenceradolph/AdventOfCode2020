import { input } from '../input';

export const Day4Part2 = () => {
    let numValid = 0;

    for (const passport of input) {
        const { byr, iyr, eyr, hgt, hcl, ecl, pid } = passport;

        // All are present
        if (byr && iyr && eyr && hgt && hcl && ecl && pid) {
            // byr (Birth Year) - four digits; at least 1920 and at most 2002
            if (byr.length != 4) continue;
            if (parseInt(byr) < 1920) continue;
            if (parseInt(byr) > 2002) continue;

            // iyr (Issue Year) - four digits; at least 2010 and at most 2020
            if (iyr.length != 4) continue;
            if (parseInt(iyr) < 2010) continue;
            if (parseInt(iyr) > 2020) continue;

            // eyr (Expiration Year) - four digits; at least 2020 and at most 2030
            if (eyr.length != 4) continue;
            if (parseInt(eyr) < 2020) continue;
            if (parseInt(eyr) > 2030) continue;

            // hgt (Height) - a number followed by either cm or in:
            // If cm, the number must be at least 150 and at most 193.
            // If in, the number must be at least 59 and at most 76
            if (hgt.slice(-2) != 'cm' && hgt.slice(-2) != 'in') continue;
            const number = parseInt(hgt);
            if (hgt.slice(-2) == 'cm') {
                if (number < 150) continue;
                if (number > 193) continue;
            } else {
                if (number < 59) continue;
                if (number > 76) continue;
            }

            // hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f
            if (hcl[0] != '#') continue;
            if (hcl.length != 7) continue;
            const chars = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            if (!(chars.includes(hcl[1]) && chars.includes(hcl[2]) && chars.includes(hcl[3]) && chars.includes(hcl[4]) && chars.includes(hcl[5]) && chars.includes(hcl[6]))) continue;

            // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth
            if (!['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(ecl)) continue;

            // pid (Passport ID) - a nine-digit number, including leading zeroes
            if (pid.length != 9) continue;
            if (isNaN(pid as any)) continue;

            numValid++;
        }
    }

    console.log(numValid);
};
