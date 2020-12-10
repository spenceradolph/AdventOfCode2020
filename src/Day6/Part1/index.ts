import { input } from '../input';

export const Day6Part1 = () => {
    let totalCount = 0;

    for (const group of input) {
        let groupQuestions: string[] = [];
        for (const person of group) {
            for (const letter of person) {
                if (!groupQuestions.includes(letter)) groupQuestions.push(letter);
            }
        }

        totalCount += groupQuestions.length;
    }

    console.log(totalCount);
};
