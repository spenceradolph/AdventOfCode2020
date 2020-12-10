import { input } from '../input';

const numBags = (searchColor: string): number => {
    let numInsideThisBag = 0;

    for (const bag of input) {
        if (bag.color == searchColor) {
            for (const insideBag of bag.inside) {
                numInsideThisBag += insideBag.number;
                numInsideThisBag += numBags(insideBag.color) * insideBag.number;
            }

            break;
        }
    }

    return numInsideThisBag;
};

export const Day7Part2 = () => {
    console.log(numBags('shiny gold'));
};
