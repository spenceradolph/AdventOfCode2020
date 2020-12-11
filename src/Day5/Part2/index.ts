import { input } from '../input';

export const Day5Part2 = () => {
    let seatIds: number[] = [];

    for (const boardingPass of input) {
        let rowBinary = '';
        let seatBinary = '';

        for (let x = 0; x < 7; x++) rowBinary += boardingPass[x] == 'F' ? '0' : '1';
        for (let x = 7; x < 10; x++) seatBinary += boardingPass[x] == 'L' ? '0' : '1';

        const seatId = parseInt(rowBinary, 2) * 8 + parseInt(seatBinary, 2);
        seatIds.push(seatId);
    }

    seatIds.sort((a, b) => a - b);

    let previousId = seatIds[0];
    for (let x = 1; x < seatIds.length; x++) {
        if (seatIds[x] - previousId == 2) {
            console.log(seatIds[x] - 1);
            return;
        }

        previousId = seatIds[x];
    }

    console.log('No seatId was found...');
};
