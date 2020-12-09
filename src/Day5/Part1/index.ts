import { input } from '../input';

export const Day5Part1 = () => {
    let highestSeatId = -1;

    for (const boardingPass of input) {
        let rowBinary = '';
        for (let x = 0; x < 7; x++) {
            rowBinary += boardingPass[x] == 'F' ? '0' : '1';
        }

        const rowNumber = parseInt(rowBinary, 2);

        let seatBinary = '';
        for (let x = 7; x < 10; x++) {
            seatBinary += boardingPass[x] == 'L' ? '0' : '1';
        }

        const seatColumn = parseInt(seatBinary, 2);

        const seatId = rowNumber * 8 + seatColumn;

        if (seatId > highestSeatId) highestSeatId = seatId;
    }

    console.log(highestSeatId);
};
