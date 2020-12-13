import { input } from '../input';

export const Day12Part2 = () => {
    let eastPos = 0,
        northPos = 0,
        waypointEast = 10,
        waypointNorth = 1;

    for (const operation of input) {
        const { letter, number } = operation;
        let rotations = number / 90;

        switch (letter) {
            case 'N':
                waypointNorth += number;
                break;
            case 'S':
                waypointNorth -= number;
                break;
            case 'E':
                waypointEast += number;
                break;
            case 'W':
                waypointEast -= number;
                break;
            case 'L':
                while (rotations--) [waypointEast, waypointNorth] = [-waypointNorth, waypointEast];
                break;
            case 'R':
                while (rotations--) [waypointEast, waypointNorth] = [waypointNorth, -waypointEast];
                break;
            case 'F':
                eastPos += waypointEast * number;
                northPos += waypointNorth * number;
                break;
        }
    }

    console.log(Math.abs(eastPos) + Math.abs(northPos));
};
