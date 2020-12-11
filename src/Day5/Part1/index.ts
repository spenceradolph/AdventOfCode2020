import { input } from '../input';

export const Day5Part1 = () => {
    let highestSeatId = -1;

    for (const boardingPass of input) {
        let rowBinary = '';
        let seatBinary = '';

        for (let x = 0; x < 7; x++) rowBinary += boardingPass[x] == 'F' ? '0' : '1';
        for (let x = 7; x < 10; x++) seatBinary += boardingPass[x] == 'L' ? '0' : '1';

        const seatId = parseInt(rowBinary, 2) * 8 + parseInt(seatBinary, 2);

        if (seatId > highestSeatId) highestSeatId = seatId;
    }

    console.log(highestSeatId);
};
