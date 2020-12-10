import { input } from '../input';

const program = (newInput: typeof input) => {
    let accumulator = 0;
    let instructionPointer = 0;
    let instructionsVisited: number[] = [];

    while (true) {
        if (instructionPointer >= newInput.length) {
            console.log(accumulator);
            return;
        }

        if (!instructionsVisited.includes(instructionPointer)) {
            instructionsVisited.push(instructionPointer);
        } else {
            return;
        }

        const { operation, argument } = newInput[instructionPointer];

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

export const Day8Part2 = () => {
    for (let x = 0; x < input.length; x++) {
        let inputCopy: typeof input = JSON.parse(JSON.stringify(input));

        const { operation } = inputCopy[x];

        if (operation == 'acc') continue;
        if (operation == 'nop') inputCopy[x].operation = 'jmp';
        if (operation == 'jmp') inputCopy[x].operation = 'nop';

        program(inputCopy);
    }
};
