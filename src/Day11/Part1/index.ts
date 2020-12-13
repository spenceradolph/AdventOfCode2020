import { input, EMPTY, OCCUPIED } from '../input';

const numAdjacent = (floorPlan: typeof input, y: number, x: number) => {
    let numAdjacent = 0;

    // Could be simplified or expanded -> 1 line for each of the 8 directions to check (or not check if edge case)
    if (x > 0) numAdjacent += floorPlan[y][x - 1] == OCCUPIED ? 1 : 0; // left
    if (x < floorPlan[0].length - 1) numAdjacent += floorPlan[y][x + 1] == OCCUPIED ? 1 : 0; // right
    if (y > 0) numAdjacent += floorPlan[y - 1][x] == OCCUPIED ? 1 : 0; // up
    if (y < floorPlan.length - 1) numAdjacent += floorPlan[y + 1][x] == OCCUPIED ? 1 : 0; // down
    if (y > 0 && x > 0) numAdjacent += floorPlan[y - 1][x - 1] == OCCUPIED ? 1 : 0; // top left
    if (y > 0 && x < floorPlan[0].length - 1) numAdjacent += floorPlan[y - 1][x + 1] == OCCUPIED ? 1 : 0; // top right
    if (y < floorPlan.length - 1 && x > 0) numAdjacent += floorPlan[y + 1][x - 1] == OCCUPIED ? 1 : 0; // bottom left
    if (y < floorPlan.length - 1 && x < floorPlan[0].length - 1) numAdjacent += floorPlan[y + 1][x + 1] == OCCUPIED ? 1 : 0; // bottom right

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

            if (oldFloorPlan[y][x] == OCCUPIED && numAdjacent(oldFloorPlan, y, x) >= 4) {
                newFloorPlan[y][x] = EMPTY;
                hasChanged = true;
            }
        }
    }

    return { newFloorPlan, hasChanged };
};

export const Day11Part1 = () => {
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
