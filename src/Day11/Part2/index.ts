import { input, EMPTY, OCCUPIED, FLOOR } from '../input';

const numAdjacent = (floorPlan: typeof input, y: number, x: number) => {
    let numAdjacent = 0;
    let valueX: number, valueY: number;

    // left
    (valueX = x), (valueY = y); // set to center position
    while (valueX >= 0) {
        valueX--; // move position to check
        if (floorPlan[valueY][valueX] != FLOOR) {
            numAdjacent += floorPlan[valueY][valueX] == OCCUPIED ? 1 : 0;
            break; // stop checking after finding a seat
        }
    }

    // right
    (valueX = x), (valueY = y);
    while (valueX < floorPlan[0].length - 1) {
        valueX++;
        if (floorPlan[valueY][valueX] != FLOOR) {
            numAdjacent += floorPlan[valueY][valueX] == OCCUPIED ? 1 : 0;
            break;
        }
    }

    // up
    (valueX = x), (valueY = y);
    while (valueY > 0) {
        valueY--;
        if (floorPlan[valueY][valueX] != FLOOR) {
            numAdjacent += floorPlan[valueY][valueX] == OCCUPIED ? 1 : 0;
            break;
        }
    }

    // down
    (valueX = x), (valueY = y);
    while (valueY < floorPlan.length - 1) {
        valueY++;
        if (floorPlan[valueY][valueX] != FLOOR) {
            numAdjacent += floorPlan[valueY][valueX] == OCCUPIED ? 1 : 0;
            break;
        }
    }

    // top left
    (valueX = x), (valueY = y);
    while (valueY > 0 && valueX > 0) {
        valueY--, valueX--;
        if (floorPlan[valueY][valueX] != FLOOR) {
            numAdjacent += floorPlan[valueY][valueX] == OCCUPIED ? 1 : 0;
            break;
        }
    }

    // top right
    (valueX = x), (valueY = y);
    while (valueY > 0 && valueX < floorPlan[0].length - 1) {
        valueY--, valueX++;
        if (floorPlan[valueY][valueX] != FLOOR) {
            numAdjacent += floorPlan[valueY][valueX] == OCCUPIED ? 1 : 0;
            break;
        }
    }

    // bottom left
    (valueX = x), (valueY = y);
    while (valueY < floorPlan.length - 1 && valueX > 0) {
        valueY++, valueX--;
        if (floorPlan[valueY][valueX] != FLOOR) {
            numAdjacent += floorPlan[valueY][valueX] == OCCUPIED ? 1 : 0;
            break;
        }
    }

    // bottom right
    (valueX = x), (valueY = y);
    while (valueY < floorPlan.length - 1 && valueX < floorPlan[0].length - 1) {
        valueY++, valueX++;
        if (floorPlan[valueY][valueX] != FLOOR) {
            numAdjacent += floorPlan[valueY][valueX] == OCCUPIED ? 1 : 0;
            break;
        }
    }

    return numAdjacent;
};

const round = (oldFloorPlan: typeof input) => {
    let newFloorPlan: typeof oldFloorPlan = JSON.parse(JSON.stringify(oldFloorPlan)); // deep copy

    let hasChanged = false;
    for (let y = 0; y < oldFloorPlan.length; y++) {
        for (let x = 0; x < oldFloorPlan[y].length; x++) {
            if (oldFloorPlan[y][x] == EMPTY && numAdjacent(oldFloorPlan, y, x) == 0) {
                newFloorPlan[y][x] = OCCUPIED;
                hasChanged = true;
            }

            if (oldFloorPlan[y][x] == OCCUPIED && numAdjacent(oldFloorPlan, y, x) >= 5) {
                newFloorPlan[y][x] = EMPTY;
                hasChanged = true;
            }
        }
    }

    return { newFloorPlan, hasChanged };
};

export const Day11Part2 = () => {
    let currentSet = input;
    while (true) {
        const { hasChanged, newFloorPlan } = round(currentSet);
        currentSet = newFloorPlan;
        if (!hasChanged) break;
    }

    let numOccupied = 0;
    for (let y = 0; y < currentSet.length; y++) {
        for (let x = 0; x < currentSet[y].length; x++) {
            if (currentSet[y][x] == OCCUPIED) numOccupied++;
        }
    }

    console.log(numOccupied);
};
