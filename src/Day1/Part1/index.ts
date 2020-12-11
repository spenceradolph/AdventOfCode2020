import { input } from '../input';

export const Day1Part1 = () => {
    for (let x = 0; x < input.length; x++) {
        for (let y = 0; y < input.length; y++) {
            if (y == x) continue;

            if (input[x] + input[y] == 2020) {
                console.log(input[x] * input[y]);
                return;
            }
        }
    }

    console.log('No Solution was found...');
};
