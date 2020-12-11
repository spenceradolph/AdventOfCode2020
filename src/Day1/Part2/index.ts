import { input } from '../input';

export const Day1Part2 = () => {
    for (let x = 0; x < input.length; x++) {
        for (let y = 0; y < input.length; y++) {
            for (let z = 0; z < input.length; z++) {
                if (x == y || x == z || y == z) continue;

                if (input[x] + input[y] + input[z] == 2020) {
                    console.log(input[x] * input[y] * input[z]);
                    return;
                }
            }
        }
    }

    console.log('No Solution was found...');
};
