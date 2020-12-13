import { input } from '../input';

export const Day12Part1 = () => {
    let direction = 90, // north is 0, east is 90 (clockwise)
        eastPos = 0,
        northPos = 0;

    for (const operation of input) {
        const { letter, number } = operation;

        switch (letter) {
            case 'N':
                northPos += number;
                break;
            case 'S':
                northPos -= number;
                break;
            case 'E':
                eastPos += number;
                break;
            case 'W':
                eastPos -= number;
                break;
            case 'L':
                direction = (direction - number + 360) % 360; // mod not well defined for negative numbers
                break;
            case 'R':
                direction = (direction + number + 360) % 360;
                break;
            case 'F':
                if (direction == 0) northPos += number;
                if (direction == 90) eastPos += number;
                if (direction == 180) northPos -= number;
                if (direction == 270) eastPos -= number;
                break;
        }
    }

    console.log(Math.abs(eastPos) + Math.abs(northPos));
};
