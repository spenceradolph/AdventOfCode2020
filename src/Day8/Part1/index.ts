import { input } from '../input';

export const Day8Part1 = () => {
    let accumulator = 0;
    let instructionPointer = 0;
    let instructionsVisited: number[] = [];

    while (true) {
        if (instructionsVisited.includes(instructionPointer)) {
            console.log(accumulator);
            break;
        }

        instructionsVisited.push(instructionPointer);
        const { operation, argument } = input[instructionPointer];

        switch (operation) {
            case 'acc':
                accumulator += argument;
                instructionPointer++;
                break;

            case 'nop':
                instructionPointer++;
                break;

            case 'jmp':
                instructionPointer += argument;
                break;
            default:
                break;
        }
    }
};
